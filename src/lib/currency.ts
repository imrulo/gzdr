/** Tipo de cambio orientativo EUR → RSD (ajusta en producción o vía API). */
export const EUR_TO_RSD = 117;

export function eurToRsd(eur: number) {
  return Math.round(eur * EUR_TO_RSD);
}

export function formatEur(eur: number) {
  return new Intl.NumberFormat("es-RS", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(
    eur,
  );
}

export function formatRsd(rsd: number) {
  return new Intl.NumberFormat("sr-RS", { style: "currency", currency: "RSD", maximumFractionDigits: 0 }).format(
    rsd,
  );
}

export function formatDualPrice(eur: number) {
  const rsd = eurToRsd(eur);
  return { eur: formatEur(eur), rsd: formatRsd(rsd), rsdRaw: rsd };
}
