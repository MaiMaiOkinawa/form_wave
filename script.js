const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  // Looping the letter of 'Email'
  label.innerHTML = label.innerText
    .split('') // Splits the text in to an array
    .map((letter, idx) =>
      `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) // Map around each letter wrapped with <span>s
    .join('') // Put letters back into a string
})