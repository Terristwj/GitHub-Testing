const initComp = {template: '<app-init></app-init>'}
const mainComp = {template: '<app-main></app-main>'};
const headerComp = {template: '<app-header></app-header>'};
const navComp = {template: '<app-nav></app-nav>'}

const portraitComp = {template: '<app-portraitCon></app-portraitCon>'};
const bookComp = {template: '<app-bookCon></app-bookCon>'};
const mapComp = {template: '<app-mapCon></app-mapCon>'};
const machineComp = {template: '<app-machineCon></app-machineCon>'};
const piggybankComp = {template: '<app-piggybankCon></app-piggybankCon>'};
const faqComp = {template: '<app-faqCon></app-faqCon>'};
const wheelComp = {template: '<app-wheelCon></app-wheelCon>'};

const routes = [
    {path: '/', component: mainComp},
];

const router = new VueRouter({routes});