document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const pdfFileInput = document.getElementById('pdfFile');
    const file = pdfFileInput.files[0];

    if (file && file.type === 'application/pdf') {
        const tableBody = document.querySelector('#pdfTable tbody');
        const rowCount = tableBody.rows.length + 1;

        const newRow = tableBody.insertRow();

        const cellSerial = newRow.insertCell(0);
        const cellView = newRow.insertCell(1);
        const cellDownload = newRow.insertCell(2);
        const cellDelete = newRow.insertCell(3);

        cellSerial.textContent = rowCount;

        const fileUrl = URL.createObjectURL(file);

        // View PDF Link
        const viewLink = document.createElement('a');
        viewLink.href = fileUrl;
        viewLink.textContent = 'View PDF';
        viewLink.target = '_blank';
        cellView.appendChild(viewLink);

        // Download PDF Link
        const downloadLink = document.createElement('a');
        downloadLink.href = fileUrl;
        downloadLink.textContent = 'Download PDF';
        downloadLink.download = file.name;
        cellDownload.appendChild(downloadLink);

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            tableBody.removeChild(newRow);
        });
        cellDelete.appendChild(deleteButton);
    } else {
        alert('Please select a valid PDF file.');
    }
});
