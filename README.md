# GitHub Bot

Bu Node.js loyiha Git repository'ga vaqt bilan bog'langan commitlar yaratish va ularni remote repository'ga yuborishni o'rganish uchun yozilgan.

## Ishga tushirish

```bash
npm install
N=7 npm start
```

`N` musbat butun son bo'lishi kerak. Dastur har bir commit uchun alohida sana ishlatadi va oxirida `origin/main` ga push qiladi. Faqat o'zingiz boshqaradigan test repository'sida foydalaning.

Bu loyiha GitHub achievement yoki contribution grafigini sun'iy oshirish uchun mo'ljallanmagan. Spam commitlar GitHub qoidalariga zid bo'lishi va akkaunt cheklanishiga olib kelishi mumkin. Haqiqiy contribution uchun foydali kod, issue va pull request'lar yuboring.

## Test

```bash
npm test
```

Pull request yuborilganda GitHub Actions avtomatik ravishda testlarni ishga tushiradi.