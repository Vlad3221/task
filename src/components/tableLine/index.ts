import {Component, Prop, Vue} from 'vue-facing-decorator';

@Component({
    name: "tableLine"
})
export default class tableLine extends Vue {
    @Prop()
    public num: number = 0;

    @Prop()
    public textTovar: string = 'Мраморный щебень фр. 2-5 мм, 25кг';

    @Prop()
    public prise: number = 0;

    @Prop()
    public quantity: string = 'Мраморный щебень';

    @Prop()
    public description: number = 0;

    @Prop()
    public result: number = 0;

    @Prop()
    public movedIndex: number | undefined;

    @Prop()
    public index!: number;

    public isOpened = false;

    public opened() {
        this.isOpened = !this.isOpened;

    };

    public mouseEnterDown = false;

    public mounted() {
        document.addEventListener('mousemove', (e)=> {
            if (!this.movedIndex) return;
            this.lineMoved(e, this.movedIndex);
        })
        document.addEventListener('mouseup', (e)=> {
            if (this.movedIndex){
                this.lineLeave();
            }
        })
    };

    public lineMoved(e:any, index:number) {
        const lines = document.getElementsByClassName(`line${index}`);

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i] as any;
            if (!line?.style) return;
            console.log(line);
            line.style.position = 'fixed';
            line.style.top = e.y + 'px';
        }
    };

    public lineLeave() {
        this.$emit('lineMoved', undefined)
    }
}