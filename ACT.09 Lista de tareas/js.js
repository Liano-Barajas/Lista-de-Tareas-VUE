const apli1 = {
    data() {
        return {
            contador: 0,
            nuevaTarea: '',
            tareas: []
        };
    },
    computed: {
        porcentaje() {
            return Math.min(Math.max(this.contador, 0), 100);
        },
        tareasCompletadas() {
            return this.tareas.filter(tarea => tarea.completada).length;
        },
        barraColor() {
            if (this.porcentaje >= 1 && this.porcentaje <= 40) {
                return 'green';
            } else if (this.porcentaje >= 41 && this.porcentaje <= 70) {
                return 'yellow';
            } else {
                return 'red';
            }
        }
    },
    methods: {
        incrementar() {
            this.contador++;
        },
        decrementar() {
            if (this.contador > 0) this.contador--;
        },
        agregarTarea() {
            if (this.nuevaTarea.trim()) {
                this.tareas.push({ texto: this.nuevaTarea.trim(), completada: false });
                this.nuevaTarea = '';
            }
        },
        alternarEstado(tarea) {
            tarea.completada = !tarea.completada;
        }
    }
};

const apli2 = Vue.createApp(apli1).mount('#seccion');
