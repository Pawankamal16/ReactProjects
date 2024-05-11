function customRender(reactElement,container){

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop == 'children') continue
        domElement.setAttribute('prop',reactElement.props[prop])
     }
   
     container.appendChild(domElement)

    }


    // custOmRender m jb bhi element pass kreneg, is syntax m krenge
const reactElement = {
    //making tree structure of elemnets
    type :'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainConatainer = document.querySelector('#root')

//inject react element in mainConatiner
customRender(reactElement,mainConatainer)