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


    public isOpened = false;

    public opened() {
        this.isOpened = !this.isOpened;
    };

    public checkMouse = false
}