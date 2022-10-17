const MESES: string[] = [
    'JAN', 'FEV', 'MAR',  'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
]

/**
 * 
 * @param data string no formato AAAA-MM-DD
 * @returns data no formato DD MMM AAAA com mês em portugues
 */
export const formataData = (data: string = '0000-00-00') => {
    const [ano, mes, dia] = data.split('-');
    return `${dia} ${MESES[Number(mes)]} ${ano}`
}