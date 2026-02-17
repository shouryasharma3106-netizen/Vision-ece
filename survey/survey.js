document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const nameInput = document.getElementById('name');
    const ratingSelect = document.getElementById('rating');
    const feedbackTextarea = document.getElementById('feedback');
    const nameError = document.getElementById('nameError');
    const ratingError = document.getElementById('ratingError');
    const feedbackError = document.getElementById('feedbackError');

    
    nameInput.addEventListener('input', function() {
        nameError.textContent = '';
    });

    ratingSelect.addEventListener('change', function() {
        ratingError.textContent = '';
    });

    feedbackTextarea.addEventListener('input', function() {
        feedbackError.textContent = '';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
       
        nameError.textContent = '';
        ratingError.textContent = '';
        feedbackError.textContent = '';
        
        
        const name = nameInput.value.trim();
        const rating = ratingSelect.value;
        const feedback = feedbackTextarea.value.trim();
        
        
        let isValid = true;
        
       
        if (name === '') {
            nameError.textContent = 'Please enter your name.';
            isValid = false;
        }
        
        
        if (rating === '' || rating === null) {
            ratingError.textContent = 'Please select a rating.';
            isValid = false;
        } else {
            const ratingNum = parseInt(rating, 10);
            if (ratingNum < 1 || ratingNum > 5) {
                ratingError.textContent = 'Please select a rating between 1 and 5.';
                isValid = false;
            }
        }
        
        
        if (feedback === '') {
            feedbackError.textContent = 'Please provide your feedback.';
            isValid = false;
        } else if (feedback.length < 10) {
            feedbackError.textContent = 'Please provide at least 10 characters of feedback.';
            isValid = false;
        }
        
        
        if (isValid) {
            form.style.display = 'none';
            thankYouMessage.style.display = 'block';
        }
    });
});