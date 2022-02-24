export const template = `
append head-content
    link(href="./textfield.scss" rel="stylesheet")

if labelName
label(for=label).text-inscription #{labelName}

input(type=type || 'text', hidden= hidden, name=inputName, id=inputName, placeholder=placeholder, class=className, autocomplete=autocomplete, value=inputValue,)
#{errorMessage}
`
