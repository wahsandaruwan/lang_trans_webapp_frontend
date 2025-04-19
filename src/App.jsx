import { useState, useEffect } from 'react';

const App = () => {
  const [englishText, setEnglishText] = useState('');
  const [sinhalaText, setSinhalaText] = useState('');
  const [showMapping, setShowMapping] = useState(false);

  // Sinhala transliteration mapping
  const sinhalaMap = {
    // Vowels
    'a': 'අ', 'aa': 'ආ', 'ae': 'ඇ', 'aae': 'ඈ',
    'i': 'ඉ', 'ii': 'ඊ', 'e': 'එ', 'ee': 'ඒ',
    'u': 'උ', 'uu': 'ඌ', 'o': 'ඔ', 'oo': 'ඕ',
    'au': 'ඖ',
    
    // Consonants
    'k': 'ක්', 'kh': 'ඛ්', 'g': 'ග්', 'gh': 'ඝ්', 'ng': 'ඞ්',
    'ch': 'ච්', 'chh': 'ඡ්', 'j': 'ජ්', 'jh': 'ඣ්', 'nj': 'ඤ්',
    't': 'ට්', 'th': 'ඨ්', 'd': 'ඩ්', 'dh': 'ඪ්', 'n': 'න්',
    'nd': 'ඳ්', 'th': 'ත්', 'thh': 'ථ්', 'd': 'ද්', 'dh': 'ධ්',
    'n': 'න්', 'p': 'ප්', 'ph': 'ඵ්', 'b': 'බ්', 'bh': 'භ්',
    'm': 'ම්', 'mb': 'ඹ්', 'y': 'ය්', 'r': 'ර්', 'l': 'ල්',
    'v': 'ව්', 'sh': 'ශ්', 'sh': 'ෂ්', 's': 'ස්', 'h': 'හ්',
    'f': 'ෆ්',
    
    // Vowel modifiers
    'ka': 'ක', 'kaa': 'කා', 'kae': 'කැ', 'kaae': 'කෑ',
    'ki': 'කි', 'kii': 'කී', 'ke': 'කෙ', 'kee': 'කේ',
    'ku': 'කු', 'kuu': 'කූ', 'ko': 'කො', 'koo': 'කෝ',
    'kau': 'කෞ',
    
    // Special characters
    'ruu': 'රූ', 'ru': 'රු',
    '.': '.',  ',': ',', '?': '?', '!': '!'
  };

  // Function to transliterate English to Sinhala
  const transliterate = (text) => {
    // This is a simplified implementation
    // A more robust solution would need regex patterns for better matching
    let result = '';
    let i = 0;
    
    while (i < text.length) {
      let found = false;
      
      // Try to match longest patterns first
      for (let length = 4; length > 0; length--) {
        const pattern = text.substr(i, length);
        if (sinhalaMap[pattern]) {
          result += sinhalaMap[pattern];
          i += length;
          found = true;
          break;
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Sinhala Typing App</h1>
        
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
            className="w-full h-32 p-4 bg-gray-50 border border-gray-300 rounded-md overflow-auto"
          >
            {sinhalaText}
          </div>
        </div>
        
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setShowMapping(!showMapping)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            {showMapping ? 'Hide Mapping Guide' : 'Show Mapping Guide'}
          </button>
        </div>
        
        {showMapping && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-xl font-semibold mb-3">Typing Guide</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">a → අ</div>
              <div className="bg-gray-50 p-2 rounded">aa → ආ</div>
              <div className="bg-gray-50 p-2 rounded">i → ඉ</div>
              <div className="bg-gray-50 p-2 rounded">ii → ඊ</div>
              <div className="bg-gray-50 p-2 rounded">u → උ</div>
              <div className="bg-gray-50 p-2 rounded">uu → ඌ</div>
              <div className="bg-gray-50 p-2 rounded">e → එ</div>
              <div className="bg-gray-50 p-2 rounded">ee → ඒ</div>
              <div className="bg-gray-50 p-2 rounded">o → ඔ</div>
              <div className="bg-gray-50 p-2 rounded">oo → ඕ</div>
              <div className="bg-gray-50 p-2 rounded">ka → ක</div>
              <div className="bg-gray-50 p-2 rounded">ki → කි</div>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              This is a simplified mapping. For consonants, type the letter followed by vowel sounds
              (e.g., "ka" for "ක", "ki" for "කි"). To get the pure consonant with "hal" mark, 
              just type the consonant (e.g., "k" for "ක්").
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
