Vue.component('app-main', {
    template:
    `
    <section class="h-full">
        <app-header @showMenu="showMenu" @closeMenu="closeMenu" @openComp="openComp"></app-header>
        <main class="absolute top-0 left-0 h-full z-10" id="main">
            <div id="overlay" class="transition-opacity bg-black opacity-0 h-full w-full"></div>
            <button @click="mouseClick" id="boardCon" class="absolute left-20 top-52">
                <div id="boardContent" class="w-88 h-64 py-8 px-12">
                    <p class="text-lg text-left leading-6 font-extrabold"><span class="text-primary">Th</span><span class="text-quarternary">e M</span><span class="text-secondary">ee</span><span class="text-tertiary">pl</span><span class="text-quinary">es</span> is a GENESIS collection of 5,555 fully customizable NFTs that grants you exclusive access to Meeple’s Metro and much more!
                        <br><br>psst, click on some of the items to learn more about the project!</p>
                </div>
            </button>
            <button @click="mouseClick" id="whitepaperCon" class="absolute top-64 left-128 w-64 h-88"></button>
            <button @click="mouseClick" id="portraitCon" class="absolute top-168 left-128 w-64 h-48"></button>
            <app-portraitCon v-if="component == 'portraitCon'" @closeComp="closeComp"></app-portraitCon>

            <div @click="mouseClick" id="computerCon" class="absolute top-152 left-240 w-72 h-40 flex flex-col items-center justify-center">
            </div>
            <button @click="mouseClick" id="bookCon" class="absolute top-200 left-240 w-40 h-40"></button>
            <app-bookCon v-if="component == 'bookCon'" @closeComp="closeComp"></app-bookCon>
            
            <button @click="mouseClick" id="mapCon" class="absolute top-208 left-280 w-56 h-28"></button>
            <app-mapCon v-if="component == 'mapCon'" @closeComp="closeComp"></app-mapCon>
            
            <button @click="mouseClick" id="machineCon" class="absolute top-72 left-392 w-52 h-60"></button>
            <app-machineCon v-if="component == 'machineCon'" @closeComp="closeComp"></app-machineCon>
            
            <button @click="mouseClick" id="piggybankCon" class="absolute top-160 left-368 w-40 h-28"></button>
            <app-piggybankCon v-if="component == 'piggybankCon'" @closeComp="closeComp"></app-piggybankCon>
            
            <button @click="mouseClick" id="faqCon" class="absolute top-152 left-416 w-44 h-40"></button>
            <app-faqCon v-if="component == 'faqCon'" @closeComp="closeComp"></app-faqCon>
            
            <button @click="mouseClick" id="wheelCon" class="absolute top-200 left-384 w-32 h-40"></button>
            <app-wheelCon v-if="component == 'wheelCon'" @closeComp="closeComp"></app-wheelCon>

            <button @click="mouseClick" id="chestCon" class="absolute top-208 left-424 w-40 h-36"></button>
        </main>
    </section>
    `,
    data() {
        return {
            overlay: this.$refs.overlay,
            comp: ""
        }
    },
    computed: {
        component: {
            get: function() {
                return this.comp;
            },
            set: function(x) {
                this.comp = x;
            }
        }
    },
    methods: {
        showMenu() {
            overlay.classList.add("opacity-50")
        },
        closeMenu() {
            overlay.classList.remove("opacity-50")
        },
        mouseClick(e) {
            // Popup!
            targetId = e.currentTarget.id;
            this.component = targetId;
            console.log(this.component)
        },
        closeComp() {
            this.component = "";
        },
        openComp(comp) {
            this.component = comp;
        }
    }
})
