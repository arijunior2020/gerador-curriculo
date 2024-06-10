const express = require('express');
const bodyParser = require('body-parser');
const PDFDocument = require('pdfkit');
const streamBuffers = require('stream-buffers');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.post('/generate-pdf', (req, res) => {
    const { name, email, phone, address, objective, company, period, activities, institution, educationPeriod, courses } = req.body;

    const doc = new PDFDocument();
    const writableStreamBuffer = new streamBuffers.WritableStreamBuffer({
        initialSize: (100 * 1024),
        incrementAmount: (10 * 1024)
    });

    doc.pipe(writableStreamBuffer);

    // Cabeçalho
    const formatField = (label, value) => {
        doc.fontSize(16).fillColor('black').text(`${label} ${value}`, { align: 'center', font: 'Helvetica-Bold' });
    };

    formatField('Nome:', name);
    formatField('Email:', email);
    formatField('Telefone:', phone);
    formatField('Endereço:', address);

    doc.moveDown();

    // Função para adicionar seções
    const addSection = (title) => {
        doc.fontSize(18).fillColor('#0073e6').text(title, { underline: true });
        doc.moveDown().fillColor('black');
    };

    // Função para adicionar linhas horizontais
    const addHorizontalLine = () => {
        doc.moveDown().moveTo(doc.x, doc.y)
            .lineTo(doc.page.width - doc.page.margins.right, doc.y)
            .stroke();
        doc.moveDown();
    };

    // Função para limpar texto
    const cleanText = (text) => {
        return text.replace(/[\r\n]+/g, '\n');
    };

    // Seção de Objetivo
    addSection('Objetivo');
    doc.fontSize(12).text(cleanText(objective), { align: 'justify' });
    addHorizontalLine();

    // Seção de Experiência Profissional
    if (company && period && activities) {
        addSection('Experiência Profissional');
        if (Array.isArray(company)) {
            for (let i = 0; i < company.length; i++) {
                doc.fontSize(12).text(`Empresa: ${company[i]}`);
                doc.text(`Período: ${period[i]}`);
                doc.text(`Atividades: ${cleanText(activities[i])}`, { align: 'justify' });
                addHorizontalLine();
            }
        } else {
            doc.fontSize(12).text(`Empresa: ${company}`);
            doc.text(`Período: ${period}`);
            doc.text(`Atividades: ${cleanText(activities)}`, { align: 'justify' });
            addHorizontalLine();
        }
    }

    // Seção de Educação
    if (institution && educationPeriod) {
        addSection('Educação');
        if (Array.isArray(institution)) {
            for (let i = 0; i < institution.length; i++) {
                doc.fontSize(12).text(`Instituição: ${institution[i]}`);
                doc.text(`Período: ${educationPeriod[i]}`);
                addHorizontalLine();
            }
        } else {
            doc.fontSize(12).text(`Instituição: ${institution}`);
            doc.text(`Período: ${educationPeriod}`);
            addHorizontalLine();
        }
    }

    // Seção de Cursos
    addSection('Cursos');
    doc.fontSize(12).text(cleanText(courses), { align: 'justify' });
    addHorizontalLine();

    doc.end();

    writableStreamBuffer.on('finish', () => {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
        res.send(writableStreamBuffer.getContents());
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
