let navList = document.querySelector(".navList")
let navListItems = [
    {
        img: "./assets/icons8-speedometer-72.png",
        name: "Dashboard"
    },
    {
        img:"./assets/icons8-down-arrow-25.png",
        name: "Receivables"
    },
    {
        img:"./assets/icons8-left-arrow-96.png",
        name: "Returns"
    },
    {
        img:"./assets/icons8-user-96.png",
        name: "Customers"
    },
    {
        img:"./assets/icons8-wallet-64.png",
        name: "Payable"
    },
    {
        img:"./assets/icons8-dollar-96.png",
        name: "Sales"
    },
    {
        img:"./assets/icons8-menu-30.png",
        name: "Inventory"
    },
    {
        img:"./assets/icons8-down-arrow-50.png",
        name: "Imports"
    },
    {
        img:"./assets/icons8-tag-50.png",
        name: "Cutting Tickets"
    },
    {
        img:"./assets/icons8-arrow-80.png",
        name: "EDI"
    },
    {
        img:"./assets/icons8-location-50.png",
        name: "Showroom"
    }
]
let reports = document.querySelector('.reports')
let reportOption = [
    'Company Snapshot',
    'Open Order Report',
    {
        name: 'Cut & Sold Lookup',
        img: './assets/icons8-right-arrow-50.png'
    },
    'Inventory Snap Shot',
    'Balance to Sell Sales Summary',
    'Open Orders to Pick',
    'Period Comparison Report',
    'SR Availability',
    'Sales Forecast Report',
    'Detailed Period Comparison Report',
    'Style Cost Report',
    'Style Cost Report(Sales Persons)',
    'Shipping/Receiving log',
    'Receiving Summary',
    'Style Availability By Date',
    'Purchase Order Report',
    'Shipping Report',
    'Traffic Report',
    'Image Cut & Sold Report',
    'Style Sheets'
]

let infoCards = document.querySelector('.infoCardContainer')
let info = [
    {
        numbers: '$13,350.00',
        img: './assets/icons8-dollar-96-orange.png',
        name: 'Total Revenue',
        color: 'rgb(253, 239, 221)'
    },
    {
        numbers: '$6000',
        img: './assets/icons8-arrow-up-right-96.png',
        name: 'Total Expenses',
        color: 'rgb(225, 236, 252)'
    },
    {
        numbers: '$56,034.00',
        img: './assets/icons8-import-64.png',
        name: 'Accounts Receivable',
        color: 'rgb(225, 245, 250)'
    },
    {
        numbers: '$67,083.00',
        img: './assets/icons8-dollar-96-orange.png',
        name: 'Accounts Payable',
        color: 'rgb(253, 239, 221)'
    },
    {
        numbers: '3,478',
        img: './assets/icons8-image-50.png',
        name: 'Items Missing Images',
        color: 'rgb(250, 238, 230)'
    },
    {
        numbers: '237',
        img: './assets/icons8-dollar-96-orange.png',
        name: 'Items missing FOB Costs',
        color: 'rgb(253, 239, 221)'
    },
    {
        numbers: '160',
        img: './assets/icons8-dollar-96-orange.png',
        name: 'PO Items Missing Costs',
        color: 'rgb(253, 239, 221)'
    },
    {
        numbers: '0/$0.00',
        img: './assets/icons8-dollar-96-orange.png',
        name: 'Booked',
        color: 'rgb(253, 239, 221)'
    }
]

function createNavListItems() 
{
    navList.innerHTML = ""
    navListItems.forEach((item) => {
        navList.innerHTML += `
            <div class="navCard">
                <div class="d-flex">
                    <img src="${item.img}" alt="">
                </div>
                <p>${item.name}</p>
            </div>
        `
    })
}
createNavListItems()


function createReportOptions()
{
    reportOption.forEach((options) => {
        if(options.img)
        {
            reports.innerHTML += `<div class="options">
                    <p>${options.name}</p>
                    <img src="${options.img}">
                </div>`
        }
        else
        {
            reports.innerHTML += `<div class="options">
                    <p>${options}</p>
                </div>`
        }
})
}
createReportOptions()

function createInfoCards()
{
    infoCards.innerHTML = ""
    info.forEach((item) => {
        infoCards.innerHTML += `
            <div class="infoCard">
                <img style="background-color: ${item.color}" src="${item.img}" alt="">
                <div class="info">
                    <h4>${item.numbers}</h4>
                    <p>${item.name}</p>
                </div>
            </div>
        `
    })
}
createInfoCards()