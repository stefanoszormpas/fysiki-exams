/* Διεύθυνση του Google Apps Script (Deploy → Web app → URL) που γράφει τα αποτελέσματα στο Sheet και στέλνει email.
   Κενό = δεν στέλνεται τίποτα. Η αποστολή γίνεται μόνο για τα mini exams των φυλλαδίων (SEND_EXAMS). */
window.EXAM_ENDPOINT = "https://script.google.com/macros/s/AKfycbzOA8lpsQSofwsrtec5TpGk7eIcgqlH-4MpH5fULg9vdymZXp_M0agovi__uNwvqvXBFg/exec";
/* tal-a1: εργασία Θέματα Α Ταλαντώσεων (ClassHub) */
window.SEND_EXAMS = /^(pan-(kr|tal|st)\d+|tal-a1)$/;
