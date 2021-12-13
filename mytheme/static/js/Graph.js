let data1 = {
    "nodes": [
        { "name": "Linux", "group": 2 },
        { "name": "Windows", "group": 2 },
        { "name": "MSDOS", "group": 2 },
        { "name": "Cloud", "group": 1 },
        { "name": "Proxmox", "group": 3 },
        { "name": "Debian", "group": 3 },
        { "name": "Red Hat", "group": 3 },
        { "name": "AWS", "group": 2 },
        { "name": "RDS", "group": 3 },
        { "name": "S3", "group": 3 },
        { "name": "EC2", "group": 3 },
        { "name": "Lambda", "group": 3 },
        { "name": "Desktop Support", "group": 4 },
        { "name": "Agile", "group": 3 },
        { "name": "Trello", "group": 4 },
        { "name": "CI/CD", "group": 2 },
        { "name": "Jenkins", "group": 3 },
        { "name": "Github Actions", "group": 3 },
        { "name": "Cybersecurity", "group": 3 },
        { "name": "Red Team", "group": 4 },
        { "name": "Blue Team", "group": 4 },
        { "name": "Reversing", "group": 5 },
        { "name": "Forensics", "group": 5 },
        { "name": "Incident Response", "group": 5 },
        { "name": "Services Misconfiguration", "group": 5 },
        { "name": "Compliance", "group": 5 },
        { "name": "Databases", "group": 4 },
        { "name": "Postgres", "group": 4 },
        { "name": "MySQL", "group": 4 },
    ],
    "links": [
        { "source": 'Linux', "target": 'Cloud', "value": 1 },
        { "source": 'Linux', "target": 'Proxmox', "value": 1 },
        { "source": 'Linux', "target": 'Debian', "value": 1 },
        { "source": 'Linux', "target": 'Red Hat', "value": 1 },
        { "source": 'MSDOS', "target": 'Windows', "value": 1 },
        { "source": 'Windows', "target": 'Cloud', "value": 1 },
        { "source": 'Cloud', "target": 'AWS', "value": 1 },
        { "source": 'AWS', "target": 'RDS', "value": 1 },
        { "source": 'AWS', "target": 'S3', "value": 1 },
        { "source": 'AWS', "target": 'EC2', "value": 1 },
        { "source": 'AWS', "target": 'Lambda', "value": 1 },
        { "source": 'Agile', "target": 'Trello', "value": 1 },
        { "source": 'Agile', "target": 'CI/CD', "value": 1 },
        { "source": 'Agile', "target": 'Desktop Support', "value": 1 },
        { "source": 'CI/CD', "target": 'Github Actions', "value": 1 },
        { "source": 'CI/CD', "target": 'Cloud', "value": 1 },
        { "source": 'CI/CD', "target": 'Jenkins', "value": 1 },
        { "source": 'Databases', "target": 'RDS', "value": 1 },
        { "source": 'Databases', "target": 'Postgres', "value": 1 },
        { "source": 'Databases', "target": 'MySQL', "value": 1 },
        { "source": 'Cybersecurity', "target": 'Linux', "value": 0 },
        { "source": 'Cybersecurity', "target": 'Windows', "value": 0 },
        { "source": 'Cybersecurity', "target": 'Red Team', "value": 0 },
        { "source": 'Cybersecurity', "target": 'Blue Team', "value": 0 },
        { "source": 'Blue Team', "target": 'Reversing', "value": 0 },
        { "source": 'Blue Team', "target": 'Forensics', "value": 0 },
        { "source": 'Blue Team', "target": 'Incident Response', "value": 0 },
        { "source": 'Blue Team', "target": 'Services Misconfiguration', "value": 0 },
        { "source": 'Blue Team', "target": 'Compliance', "value": 0 },
    ]
}



let model = {
    nodes: [],
    edges: []
};


data1.nodes.forEach(function (node, n) {
    model.nodes.push({
        group: node.group,
        label: node.name
    });
});


data1.links.forEach(function (link) {
    let fromIndex = data1.nodes.map(function(e) { return e.name; }).indexOf(link.source);
    // console.log(fromIndex);
    let toIndex = data1.nodes.map(function(e) { return e.name; }).indexOf(link.target);

    model.edges.push({
        from: fromIndex,
        to: toIndex
    });
});

graph = new ElGrapho({
    container: document.getElementById('graph'),
    model: ElGrapho.layouts.ForceDirected(model),
    width: 900,
    height: 600,
    debug: true
});
