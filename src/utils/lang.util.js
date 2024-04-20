let defautLang = "en"; 
let lang = {
    en: require('../lang/en.json')
}

/**
 * Function to generate message based on keys
 * @param {key} key Language key
 * @param {format} format Dynamic keywords in key value pair to replace in the language
 * @returns returns the response message based on current language
 */
const __ = (key, format = null) => {
    let message = lang[defautLang][key] || key

    if(format != null){
        for (const key in format) {
            message = message.replaceAll(`{${key}}`, format[key])
        }
    }

    return message
} 

module.exports = { __ }