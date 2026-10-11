/**
 * De apparater, hvor én gang koster nok til, at timen betyder noget — de får Elpriser.dk's kort (iframe)
 * under tidspunkt-blokken. Resten nøjes med blokken, så 43 sider ikke hver åbner en iframe.
 */
export const HEAVY_RUN = new Set(["vaskemaskine", "opvaskemaskine", "toerretumbler", "ovn", "elbil", "ladestander", "varmepumpe", "gulvvarme-el", "pool"]);
