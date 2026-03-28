import fs from 'fs';
import path from 'path';

const files = [
  'src/pages/Dashboard.jsx',
  'src/pages/Members.jsx',
  'src/pages/Payments.jsx',
  'src/pages/Attendance.jsx',
  'src/pages/Plans.jsx',
  'src/pages/Trainers.jsx',
  'src/pages/Reports.jsx',
  'src/layouts/MainLayout.jsx',
  'src/App.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    
    // Replace specific multi-line layout styles injected by earlier code
    // Regex matches style={{{ ... }}} where it contains grid, flex, etc.
    let updated = content.replace(/\s*style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:[^\}]+\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*justifyContent:\s*"space-between"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*flexDirection:\s*"column"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*gap:\s*"16px"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*alignItems:\s*"center",\s*gap:\s*"8px"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*justifyContent:\s*"space-between",\s*alignItems:\s*"center"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(2,\s*1fr\)",\s*gap:\s*"16px"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(4,\s*1fr\)",\s*gap:\s*"16px"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"repeat\(3,\s*1fr\)",\s*gap:\s*"24px"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"2fr\s*1fr",\s*gap:\s*"24px"\s*\}\}/g, '');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"grid",\s*gridTemplateColumns:\s*"minmax\(300px,\s*1fr\)\s*2fr",\s*gap:\s*"24px"\s*\}\}/g, '');
    
    // Remove specific height styles and other mixed styles
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*flexDirection:\s*"column",\s*height:\s*"120px"\s*\}\}/g, ' style={{ height: "120px" }}');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*borderColor:\s*"var\(--danger-bg\)"\s*\}\}/g, ' style={{ borderColor: "var(--danger-bg)" }}');
    updated = updated.replace(/\s*style=\{\{\s*display:\s*"flex",\s*borderBottom:\s*"1px\s*solid\s*var\(--border-color\)",\s*gap:\s*"16px"\s*\}\}/g, ' style={{ borderBottom: "1px solid var(--border-color)" }}');

    fs.writeFileSync(file, updated);
    console.log(`Updated ${file}`);
  }
});
