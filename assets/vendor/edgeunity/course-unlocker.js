const selectable = document.getElementsByClassName('Practice_Question_Body')
selectable.addEventListener('click', () => {
  if (document.selection) { 
    const range = document.body.createTextRange();
    range.moveToElementText(selectable);
    range.select();
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(selectable);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    window.open('http://google.com/search?q='+'"'+selectable.innerHTML+'"');
  }
})
