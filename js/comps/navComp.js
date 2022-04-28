Vue.component('app-nav', {
    template:
    `
    <div class="grid grid-cols-2">
        <div class="col-span-2 p-4">
            <button class="hover:animate-pulse block text-4xl font-black" @click.prevent="closeMenu">&#x2715</button>
        </div>
        <div class="bg-text text-center p-4">
            <h2 class="font-extrabold text-2xl text-white">INFORMATION</h2>
        </div>
        <div class="bg-text text-center p-4">
            <h2 class="font-extrabold text-2xl text-white">LINKS</h2>
        </div>
        <div class="bg-custom_grey text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center" @click.prevent="openComp('bookCon')">    
                <img class="inline mr-2" src="Resources/icons/BWbook 1.png" alt="Book Icon">
                <p class="font-extrabold text-lg text-text">lore and story</p>
            </button>
        </div>
        <div class="bg-white text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">    
                <img class="inline mr-2" src="Resources/icons/discord.png" alt="Discord Icon">
                <p class="font-extrabold text-lg text-text">discord</p>
            </button>
        </div>
        <div class="bg-white text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center" @click.prevent="openComp('mapCon')">     
                <img class="inline mr-2" src="Resources/icons/8map 1.png" alt="Map Icon">
                <p class="font-extrabold text-lg text-text">roadmap</p>
            </button>
        </div>
        <div class="bg-custom_grey text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">    
                <img class="inline mr-2" src="Resources/icons/twitter.png" alt="Twitter Icon">
                <p class="font-extrabold text-lg text-text">twitter</p>
            </button>
        </div>
        <div class="bg-custom_grey text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">    
                <img class="inline mr-2" src="Resources/icons/3chest 1.png" alt="Chest Icon">
                <p class="font-extrabold text-lg text-text">holder benefits</p>
            </button>
        </div>
        <div class="bg-white text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">    
                <img class="inline mr-2" src="Resources/icons/instagram.png" alt="Instagram Icon">
                <p class="font-extrabold text-lg text-text">instagram</p>
            </button>
        </div>
        <div class="bg-white text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center" @click.prevent="openComp('piggybankCon')">
                <img class="inline mr-2" src="Resources/icons/5piggybank 1.png" alt="Piggybank Icon">
                <p class="font-extrabold text-lg text-text">fund allocation</p>
            </button>
        </div>
        <div class="bg-custom_grey text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">
                <img class="inline mr-2" src="Resources/icons/youtube.png" alt="Youtube Icon">
                <p class="font-extrabold text-lg text-text">youtube</p>
            </button>
        </div>
        <div class="bg-custom_grey text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center" @click.prevent="openComp('faqCon')">
                <img class="inline mr-2" src="Resources/icons/1faq 1.png" alt="FAQ Icon">
                <p class="font-extrabold text-lg text-text">FAQs</p>
            </button>
        </div>
        <div class="bg-white text-center p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">
                <img class="inline mr-2" src="Resources/icons/whitepaper.png" alt="Whitepaper Icon">
                <p class="font-extrabold text-lg text-text">whitepaper</p>
            </button>  
        </div>
        <div class="bg-white p-5"></div>
        <div class="bg-custom_grey p-5"></div>
        <div class="bg-text col-span-2 text-center p-4">
            <h2 class="text-4xl uppercase font-extrabold">
                <span class="text-primary">Th</span><span class="text-secondary">e M</span><span class="text-tertiary">ee</span><span class="text-quarternary">pl</span><span class="text-quinary">es</span>
            </h2>
        </div>
        <div class="col-span-2 p-2 flex items-center justify-center">
            <button class="flex items-center justify-center">
                <img class="inline mr-2" src="Resources/icons/6machine.png" alt="Machine Icon">
                <p class="font-extrabold text-lg text-text">Magic Meeple Machine</p>
                <img class="inline ml-2" src="Resources/icons/6machine.png" alt="Machine Icon">
            </button>
        </div>
        <div class="col-span-2 p-2 bg-custom_grey flex items-center justify-center">
            <button class="flex items-center justify-center" @click.prevent="openComp('wheelCon')">
                <img class="inline mr-2" src="Resources/icons/4wheel.png" alt="Wheel Icon">
                <p class="font-extrabold text-lg text-text">Wheel of Goodies</p>
                <img class="inline ml-2" src="Resources/icons/4wheel.png" alt="Wheel Icon">
            </button>
        </div>
        <div class="col-span-2 p-5 flex items-center justify-center">
        </div>
    </div>
    `,
    data() {
        return {
            navMenu: this.$refs.navMenu
        }
    },
    methods: {
        closeMenu() {
            this.$emit("closeMenu")
        },
        openComp(comp) {
            this.$emit('openComp', comp)
        }
    }
})
