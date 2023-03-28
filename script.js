const input1 = document.querySelector('.js-teksts')
const plusButton = document.querySelector('.js-plus')

const add = (skaitlis1, skaitlis2) => {
    return skaitlis1 + skaitlis2
}

const subtract = (skaitlis1, skaitlis2) => {
    return skaitlis1 - skaitlis2
}

const multipy = (skaitlis1, skaitlis2) => {
    return skaitlis1 * skaitlis2
}

const divide = (skaitlis1, skaitlis2) => {
    return skaitlis1 / skaitlis2
}

plusButton.addEventListener('click', () => {
    console.log("Mani nospieda!")
} )