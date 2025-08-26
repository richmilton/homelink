create table device_type ("id" integer PRIMARY KEY,"productTypeId" text, "productName" text, "description" text, "dataSheetUrl" text, "manualUrl" text);
insert into device_type (productTypeId, productName, description, dataSheetUrl, manualUrl)
    values
        ('Ei1020', 'Environmental Sensor', 'Monitors temperature and humidity', 'https://www.aico.co.uk/homelink/wp-content/uploads/2025/03/Datasheet_Ei1020Ei1020_25-Mar-2025-1.pdf', 'https://www.aico.co.uk/homelink/wp-content/uploads/2025/03/Ei1020-Ei1025-Instructions-1.pdf'),
        ('Ei1025', 'Environmental Sensor', 'Monitors temperature, humidity and carbon dioxide', 'https://www.aico.co.uk/homelink/wp-content/uploads/2025/03/Datasheet_Ei1025Ei1025_25-Mar-2025.pdf', 'https://www.aico.co.uk/homelink/wp-content/uploads/2025/03/Ei1020-Ei1025-Instructions.pdf' );
