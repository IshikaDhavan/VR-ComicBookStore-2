AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId: {type: "string",default: ""}
    },
    init:function(){
        this.handleMouseEnter();
        this.handleMouseLeave();
    },
    handleMouseLeave:function(){
        this.el.addEventListener("mouseleave",() => {
            if(this.data.selectedItemId){
                const el = document.querySelector(`#${this.data.selectedItemId}`)
                const id = el.getAttribute("id")
                if(id == this.data.selectedItemId){
                    el.setAttribute("material",{color : "#fff",opacity: 0.4})
                }
            }
        })
    },
    handleMouseEnter:function(){
        this.el.addEventListener("mouseenter", () => {
            this.handleComicListState()
        })
    },
    handleComicListState:function(){
        const id = this.el.getAttribute("id")
        const comicslist = ["iron-man","voices","superman","night-wing"]
        if(comicslist.includes(id)){
            const listcontainer = document.querySelector("#poster-container")
            listcontainer.setAttribute("cursor-listener",{selectedItemId: id})
            this.el.setAttribute("material",{color: "blue",opacity : 0.4})
        }
    },
})