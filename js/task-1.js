function categoryCounter() {

    const categoryList = document.querySelectorAll('ul#categories li.item');
    const categoryCount = categoryList.length;
    console.log('Кількість категорій:', categoryCount);

    categoryList.forEach(category => {
        const title = category.querySelector('h2').textContent;
        const itemCounter = category.querySelectorAll('li').length;
        console.log(`Категорія: ${title}`);
        console.log(`Кількість елементів: ${itemCounter}`);
    });
}
document.addEventListener('DOMContentLoaded', categoryCounter);