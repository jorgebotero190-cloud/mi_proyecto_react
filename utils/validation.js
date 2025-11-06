"use cliente"
import react from "react"


function isValidEmail(email) {
  if (!email) return false; // Previene error con input vacío
  return /\S+@\S+\.\S+/.test(email);
}

module.exports = { isValidEmail };

cd