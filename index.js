document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const checkButton = document.getElementById('checkButton');
    const resultDiv = document.getElementById('result');
    const funFactDiv = document.getElementById('funFact');
    const palindromeFacts = [
        "Fun Fact: The word 'palindrome' comes from Greek words meaning 'running back again'!",
        "Fun Fact: The longest known palindromic word is 'saippuakivikauppias', which is Finnish for soap stone vendor!",
        "Fun Fact: The year 2002 was a palindrome year. The next one will be 2112!",
    ];
    checkButton.addEventListener('click', function() {
        checkPalindrome();
    });
    
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPalindrome();
        }
    });
    
    function isPalindrome(nums) {
        const numStr = nums.toString();
        if (!/^\d+$/.test(numStr)) {
            return false;
        }
        
        const reversedNumStr = numStr.split('').reverse().join('');
        return numStr === reversedNumStr;
    }
    
    function getRandomFunFact() {
        const randomIndex = Math.floor(Math.random() * palindromeFacts.length);
        return palindromeFacts[randomIndex];
    }
    
    function checkPalindrome() {
        resultDiv.className = 'result';
        funFactDiv.className = 'fun-fact hidden';
        const inputValue = numberInput.value.trim();

        if (inputValue === '') {
            resultDiv.textContent = 'Ohhh, please enter some numbers first.';
            resultDiv.className = 'result not-palindrome';
            return;
        }
        
        if (!/^\d+$/.test(inputValue)) {
            resultDiv.textContent = 'Numbers only please. No letters, spaces, or emoji!';
            resultDiv.className = 'result not-palindrome';
            return;
        }
        
        setTimeout(() => {
        
            if (isPalindrome(inputValue)) {
                resultDiv.innerHTML = `<span> YAY! This is a palindrome! 🎊</span>`;
                resultDiv.className = 'result is-palindrome';
                
        
                funFactDiv.textContent = getRandomFunFact();
                funFactDiv.className = 'fun-fact';
            } else {
                resultDiv.innerHTML = `<span>😢 Aww, this is not a palindrome. Let's try again.</span>`;
                resultDiv.className = 'result not-palindrome';
            }
        }, 100);
    }
});