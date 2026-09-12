# GitHub Bot

Bu dastur GitHub contribution grafigida commitlar ko‘rinishi uchun joriy vaqt bilan 10 ta commit yaratadi va ularni remote repository’ga push qiladi.

## Ishga tushirish

1. GitHub’da yangi repository yarating. Uni `README`, `.gitignore` yoki license bilan boshlamang.
2. Ushbu loyihada remote manzilini o‘zingizning repository’ingizga almashtiring:

	```bash
	git remote set-url origin https://github.com/GITHUB_USERNAME/REPOSITORY_NAME.git
	```

3. Dependency’larni o‘rnating va loyihani ishga tushiring:

	```bash
	npm install
	npm start
	```

GitHub so‘rasa, autentifikatsiya uchun GitHub CLI (`gh auth login`) yoki SSH remote’dan foydalaning. Bot ishlashi uchun push qilish huquqi bor akkaunt bilan autentifikatsiya qilingan bo‘lishingiz kerak.

> Eslatma: bot ishga tushirilganda `data.json` o‘zgaradi va commitlar remote repository’ga yuboriladi. Faqat o‘zingiz boshqaradigan repository’da ishlating.