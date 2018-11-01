var currentPlaces = [{"adress": "пр-т Победителей, 29, 220004", "title": "Центральный аппарат (юридический адрес)", "work_fiz": "", "work_ur": "", "latlng": "53.898259, 27.543345"},                                    {"adress": "ул. Мясникова, 32, 220030", "title": "Центральный аппарат", "work_fiz": "пн. – чт.: 9.00 – 18.30пт., предпраздн. дни: 9.00 – 17.30", "work_ur": "пн. – чт.: 9.00 – 16.00пт., предпраздн. дни: 9.00 – 15.00", "latlng": "53.898259, 27.543345"},                                    {"adress": "ул. Московская, 13, 220007", "title": "Центр банковских услуг 1 (центральный аппарат)", "work_fiz": "пн. – чт.: 9.00 – 18.30пт.: 9.00 – 17.30сб.: 9.00 – 17.00, вых.: вс., праздн. дни", "work_ur": "пн. – чт.: 9.00 – 18.30пт., предпразд. дни: 9.00 – 17.30вых.: сб., вс., праздн. дни", "latlng": "53.88752, 27.53891"},                                    {"adress": "пр. Победителей, 29", "title": "Центр розничного бизнеса №290/1", "work_fiz": "пн. – чт: 9:30 – 18:00пт., предпраздн. дни: 9:30 – 17:00вых.: сб., вс., праздн. дни", "work_ur": "пн. – чт.: 9.30 – 18.00обед: 14.15 – 15.00пт., предпразд. дни: 09.30 – 17.00обед: 14.15 – 15.00", "latlng": "53.912289, 27.541134"},                                    {"adress": "пр. Независимости, 54, 200005", "title": "Обменный пункт №12", "work_fiz": "пн. – пт.: 9.45 – 20.45обед: 14.15 – 15.00сб.: 11.00 – 20.45обед: 14.15 – 15.00вс., праздн. дни: 11.00-18.00обед: 14.15 – 15.00", "work_ur": "пн. – пт.: 9.45 – 20.45обед: 14.15 – 15.00сб.: 11.00 – 20.45обед: 14.15 – 15.00вс., праздн. дни: 11.00 – 18.00обед: 14.15 – 15.00", "latlng": "53.916292, 27.585852"},                                    {"adress": "пр. Победителей, 100", "title": "Минское отделение 2", "work_fiz": "пн. – чт.: 9.00 – 16.30пт., предпраздн. дни: 9.00 – 15.15вых.: сб., вс., праздн. дни", "work_ur": "пн. – чт.: 9.00 – 15.30пт., предпраздн. дни: 9.00 – 14.30вых.: сб., вс., праздн. дни", "latlng": "53.938088, 27.481916"},                                    {"adress": "пр. Независимости, 95, 220043", "title": "Расчетно-кассовый центр «Луч»", "work_fiz": "пн. – чт.: 9.00 – 19.00пт., предпраздн. дни: 9.00 – 18.00 вых.: сб., вс., праздн. дни", "work_ur": "пн. – чт.: 9.00 – 15.30пт., предпраздн. дни: 9.00 – 15.00вых.: сб., вс., праздн. дни", "latlng": "53.925595, 27.615613"},                                    {"adress": "ул. Кульман, 3", "title": "ЦРБ №560/1", "work_fiz": "пн. – чт.: 9.00 – 19.00пт., предпр. дни: 9.00 – 18.00сб.: 9.30 – 17.00обед: 14:00 – 14:45техн. перерыв: 11.30 – 11.45", "work_ur": "пн. – чт.: 9.10 – 16.30пт., предпр. дни: 9.10 – 15.15сб.: 9.30 – 17.00обед: 14:00 – 14:45техн. перерыв: 11.30 – 11.45", "latlng": "53.919808, 27.582647"},                                    {"adress": "пер. Асаналиева, 2, 220024", "title": "Минское отделение 3", "work_fiz": "пн. – чт.: 9.00 – 17.00пт., предпраздн. дни: 9.00 – 16.00вых.: сб., вс., праздн. дни", "work_ur": "пн. – чт.: 9.00 – 15.30 пт., предпраздн. дни: 9.00 – 15.00вых.: сб., вс., праздн. дни", "latlng": "53.84284, 27.53781"},                                    {"adress": "пр. Дзержинского, 91", "title": "Центр розничного бизнеса №620/2", "work_fiz": "пн. – сб.: 10.30 – 19.00предпраздн. дни: 10.30 – 18.00 вых.: вс., праздн. дни", "work_ur": "пн. – пт.: 9.45 – 21.00сб., вс., празд. дни: 9.50 – 21.00", "latlng": "53.859193, 27.481985"},                                    {"adress": "ул. Якубова, 10, 220101", "title": "Центр розничного бизнеса №620/1", "work_fiz": "пн. – пт.: 10.00 – 18.00вых.: сб., вс., праздн. дни", "work_ur": "", "latlng": "53.851261, 27.59790"},                                    {"adress": "ул. Бабушкина, 39, 220024", "title": "Расчетно-кассовый центр «Колядичи»", "work_fiz": "пн. – чт.: 8.30 – 16.00пт., предпраздн. дни: 8.30 – 15.00вых.: сб., вс., праздн. дни", "work_ur": "пн. – чт.: 8.30 – 15.30пт., предпраздн. дни: 8.30 – 14.30 вых.: сб., вс., праздн. дни", "latlng": "53.800869, 27.593555"},                                    {"adress": "223060 Минская обл., Минский р-н, д. Большой Тростенец, ул.Молодежная, 2А", "title": "Расчетно-кассовый центр &quot;Тростенец&quot;", "work_fiz": "пн. – чт.: 9.00 – 16.45 обед: 12.00 – 12.45пт., предпраздн. дни: 9.00 – 15.30 обед: 12.00 – 12.45вых.: сб., вс., праздничные дни", "work_ur": "пн. – чт.: 9.00 – 16.45 обед: 12.00 – 12.45пт., предпраздн. дни: 9.00 – 15.30", "latlng": "53.856938, 27.690036"},                                    {"adress": "ул. Заславская, 10, 220004", "title": "Минское отделение «Центральное»", "work_fiz": "пн. – чт.: 9.00 – 19.00пт.: 9.00 – 18.00предпразд. дни: 9.00 – 17.00вых.: сб., вс., празд. дни", "work_ur": "пн. – чт.: 9.00 – 16.00пт., предпраздн. дни: 9.00 – 15.00вых.: сб., вс., праздн. дни", "latlng": "53.9108, 27.539945"},                                    {"adress": "ул. Скрыганова, 6", "title": "Центр розничного бизнеса №570/1", "work_fiz": "пн. – пт.: 9.00 – 18.00предпраздн. дни: 9.00 – 17.00вых.: сб., вс., праздн. дни", "work_ur": "пн. – пт.: 9.00 – 18.00предпраздн. дни: 9.00 – 17.00вых.: сб., вс., праздн. дни", "latlng": "53.911748, 27.517008"},                                    {"adress": "ул. П. Глебки, 5", "title": "Центр розничного бизнеса №570/2", "work_fiz": "пн. – сб.: 10.30 – 19.00обед: 14.00 – 14.30предпраздн. дни: 10.30 – 18.00 вых.: вс., праздн. дни", "work_ur": "пн. – сб.: 10.10 – 21.00обед: 14.00 – 14.30вс.:10.10 – 21.00обед: 14.00 – 15.00техн. перерывы: 12.00 – 12.15, 17.00 – 17.15", "latlng": "53.908797, 27.469919"},                                    {"adress": "ул. Притыцкого, 93", "title": "Центр розничного бизнеса №570/3", "work_fiz": "пн. – сб.: 10.30 – 19.00обед: 14.30 – 15.00предпраздн. дни: 10.30 – 18.00 вых.: вс., праздн. дни", "work_ur": "пн. – вс.: 10.30 – 21.00обед. перерыв: 14:00 – 15:00техн. перерывы: 12.00 – 12:15, 17.00 – 17.15, 19.00 – 19.15", "latlng": "53.905849, 27.439921"},                                    {"adress": "ул. Заславская, 10", "title": "Обменный пункт №37*", "work_fiz": "пн. – чт.: 09.15 – 19.15обед: 14.30 – 15.30пт. и предпр. дни.: 09.15 – 18.15обед: 12.50 – 13.50вых.: сб., вс, праздн. дни", "work_ur": "пн. – чт.: 9.15 – 19.15обед: 14.30 – 15.30пт. и предпр. дни.: 9.15 – 18.15обед: 12.50 – 13.50вых.: сб., вс, праздн. дни", "latlng": "53.910776, 27.539697"}]