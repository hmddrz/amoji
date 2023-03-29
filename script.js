function amoji(element, size = 1.4) {
    let emojis = element.innerHTML.match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g);
    emojis.forEach((emoji) => {
        let imgTag = '<img draggable="false" style="image-rendering:-webkit-crisp-edges;max-width: ' + size + 'em;max-height: ' + size + 'em;margin:0 1px" src="https://raw.githubusercontent.com/hushra/amoji/main/emojis/' + encodeURIComponent(emoji) + '.png" alt="' + emoji + '">';
        element.innerHTML = element.innerHTML.replace(new RegExp(emoji, "g"), imgTag);
    });
}
