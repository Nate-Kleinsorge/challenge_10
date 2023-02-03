const generateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card col-sm-4">
            <div class="card-header">
                <h3>${manager.getName()}</h3>
                <h4>${manager.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    }

    const generateEngineer = engineer => {
            return `
            <div class="card col-sm-4">
                <div class="card-header">
                    <h3>${engineer.getName()}</h3>
                    <h4>${engineer.getRole()}</h4>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item"><a href="www.github.io/${engineer.getGithub()}">github: ${engineer.getGithub()}</li>
                    </ul>
                </div>
            </div>
            `;
    }

    const generateIntern = intern => {
        return `
            <div class="card col-sm-4">
            <div class="card-header">
                <h3>${intern.getName()}</h3>
                <h4>${intern.getRole()}</h4>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${intern.getSchool()}</li>
                </ul>
            </div>
            </div>
            `;
    }

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>my Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

</head>
<body>
    <div class="jumbotron text-center">
        <h1>My Team</h1>
    </div>
    <div class="container">
        <div class="row">
            ${generateTeam(team)}
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

</body>
</html>
    `;
};