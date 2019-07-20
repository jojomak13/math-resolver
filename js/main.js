const content = document.getElementById('content'),
    tabs = document.getElementById('list-tab'),
    panels = document.getElementById('nav-tabContent');
    
for(lawName in laws)
{
    tabs.innerHTML += generateTab(lawName, laws[lawName]);
    panels.innerHTML += generatePanel(lawName, laws[lawName]);
}

content.addEventListener('submit', function(e){
    e.preventDefault();

    let selectedLaw = e.target.getAttribute('data-law');

    let inputs = Array.from(e.target.elements).map(el => {
        return el.type === 'number'? parseFloat(el.value) : NaN

    }).filter(el => !isNaN(el));
    
    // empty all elements
    Array.from(e.target.elements).forEach(input => {
        input.value = '';
    });

    let res = laws[selectedLaw].role(...inputs).toFixed(2); 
    let unit = laws[selectedLaw].unit; 

    Swal.fire({
        title: 'Result: ' + res + ' ' + unit,
        width: 600,
        padding: '3em',
        backdrop: `
          rgba(0,0,123,0.4)
          url("images/mario.webp")
          center left
          no-repeat
        `
    })
});


function generateTab(lawName, rule)
{
    return `<a class="list-group-item list-group-item-action" id="${generateId(lawName)}-list" data-toggle="list"
    href="#${generateId(lawName)}" role="tab" aria-controls="home">${rule.name}</a>`;

} 

function generatePanel(lawName, rule)
{
    let formStart = `
    <div class="py-3 tab-pane fade" id="${generateId(lawName)}" role="tabpanel" aria-labelledby="${generateId(lawName)}-list">
    <form data-law="${lawName}">
        <div class="row">
    `;

    let inputs = rule.inputs.map(input => {
        return `
        <div class="col-6">
            <div class="md-form">
                <input type="number" name="${input.toLowerCase()}" id="${input.toLowerCase()}" required class="form-control">
                <label for="${input.toLowerCase()}">${input.toUpperCase()}</label>
            </div>
        </div>
        `
    }).join("");

    
    let formEnd = `
            </div>
            <button type="submit" class="btn btn-primary btn-md">Calculate</button>
        </form>
    </div>`;

    return formStart + inputs + formEnd;
}

function generateId(name)
{
    return name.toLowerCase().split(" ").join("-");
}