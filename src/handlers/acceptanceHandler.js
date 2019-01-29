// Kollar om admin har accepterat ansökan eller inte
exports.applyResult = (acceptedData) => {
    console.log('Checks if the admin has accepted the application')
    if (acceptedData === true) {
        return true
    }
    else {
        return false
    }
}

exports.uploadAdmin = (newUserData) => {
    console.log('fix database integration')
    return {
        success: true, 
        response: 'OH HAPPY DAY'
    }
}