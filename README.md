# Pay and Connect Plus Plus

## About

At the University of Cape Town, Students who live in certain on-campus housing can ask for special vouchers to buy food at the campus. They can request these vouchers between 9:00 pm - 9:00 am on weekdays. 
Sometimes (a lot of times actually) I forget to request a voucher, especially during days when I am inundated with work. This program solves my problem by issuing a voucher for me every day.

## How it works

The application employs the Axios library to interface with the API endpoint, issuing a POST request to the pay and connect server while including an authorization token.
The program is scheduled to execute on weekdays, initiated by a cron scheduler within the GitHub Actions workflow.
