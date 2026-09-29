// --- Cronograma de medicamentos ---

const paracetamol = true;
const vitaminaC = true;
const ibuprofeno = false;

const horarioParacetamol = "08:00";
const horarioVitaminaC = "14:00";
const horarioIbuprofeno = "20:00";

const tomouParacetamol = true;
const tomouVitaminaC = false;
const tomouIbuprofeno = false;

// Verificar medicamentos cadastrados
if (paracetamol || vitaminaC || ibuprofeno) {
  console.log("Existe pelo menos um medicamento no cronograma.");
} else {
  console.log("Nenhum medicamento cadastrado.");
}

// Verificar Paracetamol
if (paracetamol && tomouParacetamol) {
  console.log(`Paracetamol: tomado às ${horarioParacetamol}.`);
} else if (paracetamol) {
  console.log(`Paracetamol: pendente. Horário: ${horarioParacetamol}.`);
}

// Verificar Vitamina C
if (vitaminaC && tomouVitaminaC) {
  console.log(`Vitamina C: tomada às ${horarioVitaminaC}.`);
} else if (vitaminaC) {
  console.log(`Vitamina C: pendente. Horário: ${horarioVitaminaC}.`);
}

// Verificar Ibuprofeno
if (ibuprofeno && tomouIbuprofeno) {
  console.log(`Ibuprofeno: tomado às ${horarioIbuprofeno}.`);
} else if (ibuprofeno) {
  console.log(`Ibuprofeno: pendente. Horário: ${horarioIbuprofeno}.`);
}

// Verificar se existe medicamento pendente
if (
  (!paracetamol || tomouParacetamol) &&
  (!vitaminaC || tomouVitaminaC) &&
  (!ibuprofeno || tomouIbuprofeno)
) {
  console.log("Todos os medicamentos foram registrados.");
} else {
  console.log("Existe medicamento pendente.");
}

// Resumo
const resumo = `
--- CRONOGRAMA DE MEDICAMENTOS ---

Paracetamol: ${paracetamol}
Horário: ${horarioParacetamol}
Tomado: ${tomouParacetamol}

Vitamina C: ${vitaminaC}
Horário: ${horarioVitaminaC}
Tomada: ${tomouVitaminaC}

Ibuprofeno: ${ibuprofeno}
Horário: ${horarioIbuprofeno}
Tomado: ${tomouIbuprofeno}
`;

console.log(resumo);
