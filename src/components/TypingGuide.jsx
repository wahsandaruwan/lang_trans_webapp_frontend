import React from "react";

const TypingGuide = () => {
  return (
    <div className="mt-6 border-t pt-4">
      <h2 className="text-xl font-semibold mb-3">Typing Guide</h2>

      {/* Consonants */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Consonants:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="p-2 bg-gray-50 rounded">k → ක්</div>
          <div className="p-2 bg-gray-50 rounded">kh → ඛ්</div>
          <div className="p-2 bg-gray-50 rounded">g → ග්</div>
          <div className="p-2 bg-gray-50 rounded">gh → ඝ්</div>
          <div className="p-2 bg-gray-50 rounded">ng → ඞ්</div>
          <div className="p-2 bg-gray-50 rounded">ch → ච්</div>
          <div className="p-2 bg-gray-50 rounded">chh → ඡ්</div>
          <div className="p-2 bg-gray-50 rounded">j → ජ්</div>
          <div className="p-2 bg-gray-50 rounded">jh → ඣ්</div>
          <div className="p-2 bg-gray-50 rounded">nj → ඤ්</div>
          <div className="p-2 bg-gray-50 rounded">tt → ට්</div>
          <div className="p-2 bg-gray-50 rounded">tth → ඨ්</div>
          <div className="p-2 bg-gray-50 rounded">dd → ඩ්</div>
          <div className="p-2 bg-gray-50 rounded">ddh → ඪ්</div>
          <div className="p-2 bg-gray-50 rounded">nn → ණ්</div>
          <div className="p-2 bg-gray-50 rounded">nnd → ඳ්</div>
          <div className="p-2 bg-gray-50 rounded">th → ත්</div>
          <div className="p-2 bg-gray-50 rounded">thh → ථ්</div>
          <div className="p-2 bg-gray-50 rounded">d → ද්</div>
          <div className="p-2 bg-gray-50 rounded">dh → ධ්</div>
          <div className="p-2 bg-gray-50 rounded">n → න්</div>
          <div className="p-2 bg-gray-50 rounded">p → ප්</div>
          <div className="p-2 bg-gray-50 rounded">ph → ඵ්</div>
          <div className="p-2 bg-gray-50 rounded">b → බ්</div>
          <div className="p-2 bg-gray-50 rounded">bh → භ්</div>
          <div className="p-2 bg-gray-50 rounded">m → ම්</div>
          <div className="p-2 bg-gray-50 rounded">mb → ඹ්</div>
          <div className="p-2 bg-gray-50 rounded">y → ය්</div>
          <div className="p-2 bg-gray-50 rounded">r → ර්</div>
          <div className="p-2 bg-gray-50 rounded">l → ල්</div>
          <div className="p-2 bg-gray-50 rounded">v → ව්</div>
          <div className="p-2 bg-gray-50 rounded">sh → ශ්</div>
          <div className="p-2 bg-gray-50 rounded">shh → ෂ්</div>
          <div className="p-2 bg-gray-50 rounded">s → ස්</div>
          <div className="p-2 bg-gray-50 rounded">h → හ්</div>
          <div className="p-2 bg-gray-50 rounded">f → ෆ්</div>
          <div className="p-2 bg-gray-50 rounded">gn → ඥ්</div>
          <div className="p-2 bg-gray-50 rounded">L → ළ්</div>
        </div>
      </div>

      {/* Pure Vowels */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Pure Vowels:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="p-2 bg-gray-50 rounded">a → අ</div>
          <div className="p-2 bg-gray-50 rounded">aa/A → ආ</div>
          <div className="p-2 bg-gray-50 rounded">ae → ඇ</div>
          <div className="p-2 bg-gray-50 rounded">aae/Ae → ඈ</div>
          <div className="p-2 bg-gray-50 rounded">i → ඉ</div>
          <div className="p-2 bg-gray-50 rounded">ii/I → ඊ</div>
          <div className="p-2 bg-gray-50 rounded">u → උ</div>
          <div className="p-2 bg-gray-50 rounded">uu/U → ඌ</div>
          <div className="p-2 bg-gray-50 rounded">e → එ</div>
          <div className="p-2 bg-gray-50 rounded">ee/E → ඒ</div>
          <div className="p-2 bg-gray-50 rounded">o → ඔ</div>
          <div className="p-2 bg-gray-50 rounded">oo/O → ඕ</div>
          <div className="p-2 bg-gray-50 rounded">au → ඖ</div>
        </div>
      </div>

      {/* Special Characters */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Special Characters:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="p-2 bg-gray-50 rounded">n\/N → ං (anusvara)</div>
          <div className="p-2 bg-gray-50 rounded">ng\/H → ඃ (visarga)</div>
          <div className="p-2 bg-gray-50 rounded">R → ඍ</div>
          <div className="p-2 bg-gray-50 rounded">Ru → ඎ</div>
          <div className="p-2 bg-gray-50 rounded">Lu → ඏ</div>
          <div className="p-2 bg-gray-50 rounded">Luu → ඐ</div>
          <div className="p-2 bg-gray-50 rounded">ru → ෘ</div>
          <div className="p-2 bg-gray-50 rounded">ruu → ෲ</div>
          <div className="p-2 bg-gray-50 rounded">lu → ෟ</div>
          <div className="p-2 bg-gray-50 rounded">luu → ෳ</div>
        </div>
      </div>

      {/* Vowel Modifiers (when added to consonants) */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">
          Vowel Modifiers (examples with 'k'):
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="p-2 bg-gray-50 rounded">k → ක්</div>
          <div className="p-2 bg-gray-50 rounded">ka → ක</div>
          <div className="p-2 bg-gray-50 rounded">kaa/kA → කා</div>
          <div className="p-2 bg-gray-50 rounded">kae → කැ</div>
          <div className="p-2 bg-gray-50 rounded">kaae/kAe → කෑ</div>
          <div className="p-2 bg-gray-50 rounded">ki → කි</div>
          <div className="p-2 bg-gray-50 rounded">kii/kI → කී</div>
          <div className="p-2 bg-gray-50 rounded">ku → කු</div>
          <div className="p-2 bg-gray-50 rounded">kuu/kU → කූ</div>
          <div className="p-2 bg-gray-50 rounded">ke → කෙ</div>
          <div className="p-2 bg-gray-50 rounded">kee/kE → කේ</div>
          <div className="p-2 bg-gray-50 rounded">ko → කො</div>
          <div className="p-2 bg-gray-50 rounded">koo/kO → කෝ</div>
          <div className="p-2 bg-gray-50 rounded">kau → කෞ</div>
        </div>
      </div>

      {/* Common Word Combinations */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Common Word Combinations:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="p-2 bg-gray-50 rounded">sinhala → සිංහල</div>
          <div className="p-2 bg-gray-50 rounded">sinhalese → සිංහල</div>
          <div className="p-2 bg-gray-50 rounded">lanka → ලංකා</div>
          <div className="p-2 bg-gray-50 rounded">sri → ශ්‍රී</div>
        </div>
      </div>

      {/* Usage Tips */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Usage Tips:</h3>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Consonants by default include the HAL mark (්)</li>
          <li>Add vowels after consonants to get the combined form</li>
          <li>Use capital letters as shortcuts (A=aa, I=ii, etc.)</li>
          <li>Add "n\" or "N" after a character to add anusvara (ං)</li>
          <li>Example: "sin\hala" or "siNhala" both produce "සිංහල"</li>
        </ul>
      </div>
    </div>
  );
};

export default TypingGuide;
