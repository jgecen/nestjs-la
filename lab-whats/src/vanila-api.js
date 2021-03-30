const sms = (fone, message) => {
    console.log(`Enviando SMS para ${fone} e mensagem ${message}`)
}

const whats = (fone, message) => {
    console.log(`Enviando WHATS para ${fone} e mensagem ${message}`)
}

module.exports = ((connects = []) => {
    const _shoot = () => {
        connects.forEach(con => {
            con('999652', 'isso ESSA É')
        });

    }

    return {
        shoot: _shoot
    };
})([sms, whats]);
