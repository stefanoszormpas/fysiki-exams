/* Διεύθυνση του Google Apps Script (Deploy → Web app → URL) που γράφει τα αποτελέσματα στο Sheet και στέλνει email.
   Κενό = δεν στέλνεται τίποτα. Η αποστολή γίνεται μόνο για τα mini exams των φυλλαδίων (SEND_EXAMS). */
window.EXAM_ENDPOINT = "";
window.SEND_EXAMS = /^pan-(kr|tal|st)\d+$/;
