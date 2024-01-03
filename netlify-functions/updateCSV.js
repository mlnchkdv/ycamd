const { parse, unparse } = require('papaparse');
const { promises: fs } = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
    const csvFilePath = path.join('/tmp', 'data.csv');
    let csvData = [];

    try {
        // Проверка, существует ли уже CSV-файл
        if (fs.existsSync(csvFilePath)) {
            const existingData = await fs.readFile(csvFilePath, 'utf8');
            csvData = parse(existingData, { header: true }).data;
        }

        // Добавление новых данных
        const newData = { /* здесь ваши данные */ };
        csvData.push(newData);

        // Запись в CSV
        const newCSV = unparse(csvData);
        await fs.writeFile(csvFilePath, newCSV);

        return {
            statusCode: 200,
            body: 'CSV file updated successfully'
        };
    } catch (error) {
        return { 
            statusCode: 500, 
            body: `Error: ${error.message}` 
        };
    }
};
