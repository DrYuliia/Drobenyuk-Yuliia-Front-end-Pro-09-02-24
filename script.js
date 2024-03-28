function getInfo(users) {
    let phoneNumbers = [];
    let sumBalance = 0;

    users.forEach(user => {
        const balanceNumbers = parseFloat(user.balance.replace('$', '').replace(',', ''));
        if (balanceNumbers > 2000) {
            phoneNumbers.push(user.phone);
        }
        sumBalance += balanceNumbers;
    });

    return {
        phoneNumbers: phoneNumbers,
        sumBalance: sumBalance
    };
}

const usersInfo = getInfo(users);
console.log('Телефонні номери користувачів з балансом більше 2000 доларів:');
console.log(usersInfo.phoneNumbers);
console.log('Загальна сума балансів користувачів: $' + usersInfo.sumBalance.toFixed(2));
