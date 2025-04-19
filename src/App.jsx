import { useState, useEffect } from 'react';

const App = () => {
  const [englishText, setEnglishText] = useState('');
  const [sinhalaText, setSinhalaText] = useState('');
  const [showMapping, setShowMapping] = useState(false);

  // Define consonant base characters
  const consonants = {
    'k': 'ක', 'kh': 'ඛ', 'g': 'ග', 'gh': 'ඝ', 'ng': 'ඞ',
    'ch': 'ච', 'chh': 'ඡ', 'j': 'ජ', 'jh': 'ඣ', 'nj': 'ඤ',
    't': 'ට', 'th': 'ඨ', 'd': 'ඩ', 'dh': 'ඪ', 'n': 'න',
    'nd': 'ඳ', 'tha': 'ත', 'thha': 'ථ', 'da': 'ද', 'dha': 'ධ',
    'na': 'න', 'p': 'ප', 'ph': 'ඵ', 'b': 'බ', 'bh': 'භ',
    'm': 'ම', 'mb': 'ඹ', 'y': 'ය', 'r': 'ර', 'l': 'ල',
    'v': 'ව', 'sh': 'ශ', 'sha': 'ෂ', 's': 'ස', 'h': 'හ',
    'f': 'ෆ', 'gn': 'ඥ', 'gna': 'ඥ', 'lu': 'ළු'
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
    ' ': ' ', '\n': '\n', '\t': '\t'
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
    });
    
    return map;
  };

  const sinhalaMap = generateSinhalaMap();

  // Function to transliterate English to Sinhala
  const transliterate = (text) => {
    let result = '';
    let i = 0;
    
    while (i < text.length) {
      let found = false;
      
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
    { english: "mama oyaata aadarei", sinhala: "මම ඔයාට ආදරෙයි" },
    { english: "kohomada ithin", sinhala: "කොහොමද ඉතින්" },
    { english: "ayubowan subha dawasak", sinhala: "ආයුබෝවන් සුභ දවසක්" }
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
        
        {showMapping && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold mb-3">Typing Guide</h2>
            
            <h3 className="font-medium mt-4 mb-2">Vowels:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {Object.entries(vowels).map(([eng, sin], idx) => (
                <div key={idx} className="bg-gray-50 p-2 rounded flex justify-between">
                  <span>{eng}</span>
                  <span className="font-semibold">{sin}</span>
                </div>
              ))}
            </div>
            
            <h3 className="font-medium mt-4 mb-2">Some consonants with vowel modifiers:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>k</span>
                <span className="font-semibold">ක්</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>ka</span>
                <span className="font-semibold">ක</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>ki</span>
                <span className="font-semibold">කි</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>kii</span>
                <span className="font-semibold">කී</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>ku</span>
                <span className="font-semibold">කු</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>kuu</span>
                <span className="font-semibold">කූ</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>ke</span>
                <span className="font-semibold">කෙ</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>kee</span>
                <span className="font-semibold">කේ</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>ko</span>
                <span className="font-semibold">කො</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>koo</span>
                <span className="font-semibold">කෝ</span>
              </div>
              <div className="bg-gray-50 p-2 rounded flex justify-between">
                <span>kau</span>
                <span className="font-semibold">කෞ</span>
              </div>
            </div>
            
            <p className="mt-4 text-sm text-gray-600">
              This mapping follows common transliteration patterns. For vowels, double letters often
              indicate long vowels (e.g., "aa" for "ආ", "ii" for "ඊ"). For consonants, add vowel sounds
              after the consonant (e.g., "ka" for "ක", "ki" for "කි"). To get the pure consonant with "hal" mark, 
              just type the consonant letter (e.g., "k" for "ක්").
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
