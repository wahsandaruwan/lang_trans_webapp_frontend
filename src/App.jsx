import { useState, useEffect } from "react";
import {TypingGuide} from "./components"

const App = () => {
  const [englishText, setEnglishText] = useState('');
  const [sinhalaText, setSinhalaText] = useState('');
  const [showMapping, setShowMapping] = useState(false);

  // Define consonant base characters with corrected mappings
  const consonants = {
    'k': 'ක', 'kh': 'ඛ', 'g': 'ග', 'gh': 'ඝ', 'ng': 'ඞ',
    'ch': 'ච', 'chh': 'ඡ', 'j': 'ජ', 'jh': 'ඣ', 'nj': 'ඤ',
    'tt': 'ට', 'tth': 'ඨ', 'dd': 'ඩ', 'ddh': 'ඪ', 'nn': 'ණ',
    'nnd': 'ඳ', 'th': 'ත', 'thh': 'ථ', 'd': 'ද', 'dh': 'ධ',
    'n': 'න', 'p': 'ප', 'ph': 'ඵ', 'b': 'බ', 'bh': 'භ',
    'm': 'ම', 'mb': 'ඹ', 'y': 'ය', 'r': 'ර', 'l': 'ල',
    'v': 'ව', 'sh': 'ශ', 'shh': 'ෂ', 's': 'ස', 'h': 'හ',
    'f': 'ෆ', 'gn': 'ඥ', 'L': 'ළ'
  };

  // Define vowel modifiers
  const vowelModifiers = {
    '': '්', // HAL mark
    'a': '', // No modifier for 'a'
    'aa': 'ා', 'A': 'ා',
    'ae': 'ැ',
    'aae': 'ෑ', 'Ae': 'ෑ',
    'i': 'ි',
    'ii': 'ී', 'I': 'ී',
    'u': 'ු',
    'uu': 'ූ', 'U': 'ූ',
    'e': 'ෙ',
    'ee': 'ේ', 'E': 'ේ',
    'o': 'ො',
    'oo': 'ෝ', 'O': 'ෝ',
    'au': 'ෞ'
  };

  // Pure vowels
  const vowels = {
    'a': 'අ',
    'aa': 'ආ', 'A': 'ආ',
    'ae': 'ඇ',
    'aae': 'ඈ', 'Ae': 'ඈ',
    'i': 'ඉ',
    'ii': 'ඊ', 'I': 'ඊ',
    'u': 'උ',
    'uu': 'ඌ', 'U': 'ඌ',
    'e': 'එ',
    'ee': 'ඒ', 'E': 'ඒ',
    'o': 'ඔ',
    'oo': 'ඕ', 'O': 'ඕ',
    'au': 'ඖ'
  };

  // Special characters and additional mappings
  const specialChars = {
    '.': '.', ',': ',', '?': '?', '!': '!',
    ' ': ' ', '\n': '\n', '\t': '\t',
    // Add the anusvara (binduva) and other special characters
    'n\\': 'ං', // anusvara using n\
    'N': 'ං',   // alternative for anusvara
    'ng\\': 'ඃ', // visarga
    'H': 'ඃ',   // alternative for visarga
    'R': 'ඍ',   // special vowels
    'Ru': 'ඎ',
    'Lu': 'ඏ', 
    'Luu': 'ඐ',
    'ru': 'ෘ',   // vowel modifiers
    'ruu': 'ෲ',
    'lu': 'ෟ',
    'luu': 'ෳ'
  };

  // Generate all consonant-vowel combinations dynamically
  const generateSinhalaMap = () => {
    const map = { ...vowels, ...specialChars };
    
    // Add consonants with HAL mark
    Object.entries(consonants).forEach(([engConsonant, sinhalaConsonant]) => {
      map[engConsonant] = sinhalaConsonant + vowelModifiers[''];
    });
    
    // Add all consonant-vowel combinations
    Object.entries(consonants).forEach(([engConsonant, sinhalaConsonant]) => {
      Object.entries(vowelModifiers).forEach(([engVowel, sinhalaVowelMod]) => {
        if (engVowel !== '') {
          map[engConsonant + engVowel] = sinhalaConsonant + sinhalaVowelMod;
        }
      });
      
      // Add consonant + anusvara combinations
      map[engConsonant + 'n\\'] = sinhalaConsonant + 'ං';
      map[engConsonant + 'N'] = sinhalaConsonant + 'ං';
    });
    
    return map;
  };

  const sinhalaMap = generateSinhalaMap();

  // Add some common word combinations for easier typing
  const wordCombinations = {
    'sinhala': 'සිංහල',
    'sinhalese': 'සිංහල',
    'lanka': 'ලංකා',
    'sri': 'ශ්‍රී'
  };

  // Function to transliterate English to Sinhala
  const transliterate = (text) => {
    let result = '';
    let i = 0;
    
    while (i < text.length) {
      let found = false;
      
      // Check for word combinations first
      for (const [engWord, sinhalaWord] of Object.entries(wordCombinations)) {
        if (text.substr(i).toLowerCase().startsWith(engWord.toLowerCase())) {
          // Check if the word is a full word (surrounded by spaces or at the beginning/end)
          const isFullWord = (
            (i === 0 || /\s/.test(text[i - 1])) && 
            (i + engWord.length === text.length || /\s/.test(text[i + engWord.length]))
          );
          
          if (isFullWord) {
            result += sinhalaWord;
            i += engWord.length;
            found = true;
            break;
          }
        }
      }
      
      if (found) continue;
      
      // Try to match longest patterns first (up to 5 characters)
      for (let length = 5; length > 0; length--) {
        if (i + length <= text.length) {
          const pattern = text.substr(i, length);
          if (sinhalaMap[pattern]) {
            result += sinhalaMap[pattern];
            i += length;
            found = true;
            break;
          }
        }
      }
      
      // If no match, keep the original character
      if (!found) {
        result += text[i];
        i++;
      }
    }
    
    return result;
  };

  // Update Sinhala text whenever English text changes
  useEffect(() => {
    setSinhalaText(transliterate(englishText));
  }, [englishText]);

  // Demo examples to show common usage
  const examples = [
    { english: "sinhala", sinhala: "සිංහල" },
    { english: "sin\\hala", sinhala: "සිංහල" },
    { english: "mama oyaatta aadareyi", sinhala: "මම ඔයාට ආදරෙයි" },
    { english: "sri lanka", sinhala: "ශ්‍රී ලංකා" }
  ];

  // Apply an example
  const applyExample = (example) => {
    setEnglishText(example.english);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Language Translator App</h1>
        
        <div className="mb-6">
          <label htmlFor="englishInput" className="block text-sm font-medium text-gray-700 mb-2">
            Type using English characters:
          </label>
          <textarea
            id="englishInput"
            className="w-full h-32 p-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={englishText}
            onChange={(e) => setEnglishText(e.target.value)}
            placeholder="Type here using English characters..."
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="sinhalaOutput" className="block text-sm font-medium text-gray-700 mb-2">
            Sinhala output:
          </label>
          <div 
            id="sinhalaOutput"
            className="w-full h-32 p-4 bg-gray-50 border border-gray-300 rounded-md overflow-auto text-lg"
          >
            {sinhalaText}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <button
            onClick={() => setShowMapping(!showMapping)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            {showMapping ? 'Hide Mapping Guide' : 'Show Mapping Guide'}
          </button>
          
          <button
            onClick={() => navigator.clipboard.writeText(sinhalaText)}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Copy Sinhala Text
          </button>
          
          <button
            onClick={() => setEnglishText('')}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Clear
          </button>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Examples:</h3>
          <div className="flex flex-wrap gap-2">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => applyExample(example)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm"
              >
                {example.english}
              </button>
            ))}
          </div>
        </div>
        
        {showMapping && <TypingGuide/>}
      </div>
    </div>
  );
};

export default App;
