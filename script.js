function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    
    if (currentLang === 'ru') {
        switchToEnglish();
    } else {
        switchToRussian();
    }
}

function switchToEnglish() {
    
    document.documentElement.lang = 'en';
    
    const button = document.querySelector('button');
    button.textContent = 'Change language';
    
    
    document.getElementById('dom-title').textContent = 'DOM_JS. Reading information from DOM';
    
    
    updatePassportText('en');
}

function switchToRussian() {
    
    document.documentElement.lang = 'ru';
    
    
    const button = document.querySelector('button');
    button.textContent = 'Изменить язык';
    
    
    document.getElementById('dom-title').textContent = 'DOM_JS. Считываем информацию из DOM';
    
   
    updatePassportText('ru');
}

function updatePassportText(lang) {
    const passportTexts = {
        'ru': {
            'text-mvd': 'МВД ПО РЕСПУБЛИКЕ ТАТАРСТАН',
            'text-surname': 'МУХАРЛЯМОВА', 
            'text-name': 'АРИНА',
            'text-patronymic': 'АРТУРОВНА',
            'text-birthplace': 'Г. КАЗАНЬ'
        },
        'en': {
            'text-mvd': 'MVD FOR THE REPUBLIC OF TATARSTAN',
            'text-surname': 'MUKHARLYAMOVA',
            'text-name': 'ARINA', 
            'text-patronymic': 'ARTHUROVNA',
            'text-birthplace': 'KAZAN CITY'
        }
    };
    
    
    for (const [elementId, text] of Object.entries(passportTexts[lang])) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = text;
        }
    }
}


function demonstrateDOM() {
    console.log('=== ИНФОРМАЦИЯ ИЗ DOM ===');
    
   
    const passportData = {
        'Организация': document.getElementById('text-mvd')?.textContent,
        'Фамилия': document.getElementById('text-surname')?.textContent,
        'Имя': document.getElementById('text-name')?.textContent,
        'Отчество': document.getElementById('text-patronymic')?.textContent,
        'Дата рождения': document.getElementById('text-birthdate')?.textContent,
        'Место рождения': document.getElementById('text-birthplace')?.textContent
    };
    
    console.log('Данные паспорта:', passportData);
    
   
    const navLinks = document.querySelectorAll('nav a');
    const navigation = Array.from(navLinks).map(link => ({
        text: link.textContent,
        href: link.getAttribute('href')
    }));
    
    console.log('Навигация:', navigation);
    
    
    console.log('Текущий язык:', document.documentElement.lang);
}


document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница загружена!');
    demonstrateDOM();
    
    
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
           
            setTimeout(demonstrateDOM, 100);
        });
    }
});
