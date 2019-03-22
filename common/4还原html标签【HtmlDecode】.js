function HtmlDecode(text) {
    return text.replace(/&/g, '&').replace(/"/g, '\"').replace(/</g, '<').replace(/>/g, '>')
}