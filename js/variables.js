const datosDestino = [{tipo: 'VIVA WYNDHAM MAYA, RIVIERA MAYA, MEXICO', factor: 48},
                        {tipo: 'VIVA WYNDHAM AZTECA, RIVIERA MAYA, MEXICO', factor: 48},
                        {tipo: 'Viva Wyndham Dominicus Beach, BAYAHIBE, LA ROMANA, REPÚBLICA DOMINICANA', factor: 48},
                        {tipo: 'Viva Wyndham Dominicus Palace , BAYAHIBE, LA ROMANA, REPÚBLICA DOMINICANA', factor: 48},
                        {tipo: 'Viva Wyndham Tangerine, CABARETE, PUERTO PLATA, REPÚBLICA DOMINICANA', factor: 36},
                        {tipo: 'Viva Wyndham V Heavens, PLAYA DORADA, PUERTO PLATA, REPÚBLICA DOMINICANA', factor: 40},
                        {tipo: 'Viva Wyndham V Samana (Adults Only), LAS TERRENAS SAMANA, REPÚBLICA DOMINICANA', factor: 50},
                        {tipo: 'Viva Wyndham Fortuna Beach, FREEPORT, GRAND BAHAMA, BAHAMAS', factor: 53}]

// Factor 1.7 para los meses de temporada alta

const datosMes = [{tipo: 'Enero', factor: 1.7},
                    {tipo: 'Febrero', factor: 1.7},
                    {tipo: 'Marzo', factor: 1.7},
                    {tipo: 'Abril', factor: 1.00},
                    {tipo: 'Mayo', factor: 1.00},
                    {tipo: 'Junio', factor: 1.00},
                    {tipo: 'Julio', factor: 1.7},
                    {tipo: 'Agosto', factor: 1.7},
                    {tipo: 'Septiembre', factor: 1.00},
                    {tipo: 'Octubre', factor: 1.00},
                    {tipo: 'Noviembre', factor: 1.00},
                    {tipo: 'Diciembre', factor: 1.7}]

const comision = 500