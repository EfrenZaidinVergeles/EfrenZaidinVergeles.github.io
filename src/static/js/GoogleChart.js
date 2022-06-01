google.charts.load('current', { packages: ['timeline'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();

    dataTable.addColumn({ type: 'string', id: 'Phase' });
    dataTable.addColumn({ type: 'string', id: 'Description' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        ['High School', 'Highschool', new Date(2012, 1), new Date(2016, 1)],
        ['High School', 'Teaching About Cybersecurity', new Date(2021, 11), new Date(2021, 12)],
        ['University Preparation', 'Science', new Date(2016, 1), new Date(2018, 1)],
        ['College', 'SysAdmin', new Date(2018, 1), new Date(2020, 1)],
        ['College', 'Computing History Project', new Date(2018, 11), new Date(2018, 12)],
        ['College', 'Masterserver', new Date(2020, 4), new Date(2020, 8)],
        ['Specialization', 'Cybersecurity Specialist', new Date(2020, 1), new Date(2021, 1)],
        ['Specialization', 'Bug Bounty', new Date(2021, 6), new Date(2021, 7)],
        ['Self Learning', 'Python & Assembly', new Date(2020, 1), new Date()],
        ['Self Learning', 'Cybersecurity', new Date(2019, 11), new Date()],
        ['Self Learning', 'DevOps', new Date(2021, 5), new Date()],
        ['Work', 'Devops @ Aircury', new Date(2020, 10, 13), new Date()],
        ['Work', 'Cybersecurity @ UserZoom', new Date(2022, 3, 1), new Date()],
    ])

    chart.draw(dataTable);
}