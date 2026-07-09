// Casos de éxito — contenido adaptado de las páginas "Caso de éxito" de Notion
// (interview to grab Saetas use case data, 2026-07). Clientes anonimizados por decisión
// del propietario. Fotos con marca de agua en /public/casos/<slug>/.
// Los casos con publicado:false existen pero no se listan ni generan ruta (pendientes de fotos).

export type Bloque =
  | { t: "p"; v: string }
  | { t: "h"; v: string }
  | { t: "ul"; v: string[] };

export type Caso = {
  slug: string;
  tag: string;
  tituloCorto: string;
  titulo: string;
  excerpt: string;
  fotos: number; // cantidad de fotos en /casos/<slug>/{1..n}.webp
  publicado: boolean;
  cuerpo: Bloque[];
};

export const casos: Caso[] = [
  {
    slug: "transporte-interdepartamental",
    tag: "Programa SST",
    tituloCorto: "Prevención integral para el transporte interdepartamental",
    titulo: "Cuando la seguridad viaja con cada ruta: prevención integral para el transporte interdepartamental",
    excerpt: "Programa NTS-009 completo con Comité Mixto operativo, primeros auxilios para conductores en ruta e índices de accidentabilidad.",
    fotos: 4,
    publicado: true,
    cuerpo: [
      { t: "p", v: "El transporte interdepartamental de pasajeros y encomiendas es una operación crítica para la conectividad nacional. Su naturaleza itinerante, sin embargo, la expone a un abanico de riesgos que difícilmente se gestionan desde una oficina central: colisiones en ruta, bloqueos y convulsiones sociales, manipulación de encomiendas selladas cuyo contenido es declarado por el remitente pero no verificable, y accidentes en operaciones de carga y descarga en almacenes." },
      { t: "p", v: "En este contexto, una empresa del rubro con operación multi-departamental y centro principal de operaciones en la ciudad de La Paz convocó a Saetas Prevención para implementar un Programa Integral de Salud y Seguridad Ocupacional bajo la normativa boliviana NTS-009. El desafío era doble: cumplir con los 13 requisitos formales que la norma exige —incluyendo el reporte trimestral al Ministerio de Trabajo— y, al mismo tiempo, cerrar brechas operativas reales que impactaban la seguridad de sus conductores y la continuidad del servicio." },
      { t: "h", v: "Diagnóstico" },
      { t: "p", v: "El diagnóstico inicial reveló, además del riesgo evidente de la ruta, un problema silencioso: los conductores —que representan la mayor parte del personal— no contaban con un canal formal para elevar preocupaciones de seguridad. Su naturaleza itinerante los alejaba de la administración central. Sumado a esto, la empresa carecía de herramientas estructuradas para el análisis de causa raíz de incidentes, lo que provocaba que los mismos eventos se repitieran sin generar aprendizaje organizacional." },
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Implementación de los 13 requisitos de la NTS-009 con documentación auditable ante el Ministerio de Trabajo.",
        "Conformación del Comité Mixto de Higiene y Seguridad Ocupacional con representación efectiva de conductores, generando por primera vez un canal formal de voz operativa.",
        "Señalética conforme a la resolución ministerial vigente, rutas de evacuación, puntos de reunión y señalización de extintores y botiquines.",
        "Capacitación en primeros auxilios diseñada específicamente para conductores en ruta.",
        "Identificación de peligros, evaluación de riesgos y definición de controles de mitigación para cada tipo de operación.",
        "Implementación de índices de accidentabilidad para medir probabilidad, severidad y recurrencia, transformando cada incidente en una oportunidad de aprendizaje.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "La organización pasó de operar con un enfoque reactivo a contar con un sistema preventivo verificable. El Comité Mixto se convirtió en el mecanismo formal para canalizar preocupaciones desde los conductores hacia la administración, y los índices de accidentabilidad habilitaron una gestión basada en datos que permite anticipar tendencias y prevenir eventos futuros. El cumplimiento normativo, adicionalmente, dejó de ser una carga administrativa para convertirse en un activo verificable ante inspecciones, protegiendo la continuidad operativa y reduciendo la exposición reputacional propia del rubro." },
      { t: "h", v: "Un enfoque replicable" },
      { t: "p", v: "Este caso ilustra cómo la salud y seguridad ocupacional, cuando se implementa con foco en el negocio, deja de ser un ejercicio de cumplimiento y se convierte en un habilitador de operación segura, sostenible y confiable —tres atributos indispensables para cualquier empresa que traslada personas y bienes por rutas nacionales." },
    ],
  },
  {
    slug: "ingenieria-electrica",
    tag: "Riesgo eléctrico",
    tituloCorto: "Proteger al talento técnico en ingeniería eléctrica",
    titulo: "Ingeniería eléctrica de media y alta tensión: proteger al talento técnico como estrategia de negocio",
    excerpt: "Primeros auxilios especializados en riesgo eléctrico y gestión activa de exámenes ocupacionales para una firma técnica recurrente.",
    fotos: 7,
    publicado: true,
    cuerpo: [
      { t: "p", v: "La ingeniería eléctrica de media y alta tensión es una disciplina de alta especialización, donde cada colaborador representa un activo estratégico difícil de reemplazar. Las firmas del rubro operan con un riesgo inherente que la industria conoce bien —el shock eléctrico letal— pero también con un pasivo silencioso: la brecha estructural en la ejecución efectiva de los exámenes ocupacionales que la normativa exige." },
      { t: "p", v: "Una empresa de ingeniería eléctrica de aproximadamente 10 trabajadores, dedicada al diseño y construcción de tableros de protección y control, memorias de cálculo, arquitecturas y planos de conexión interna —además de su implementación en sitio del cliente final—, contrató a Saetas Prevención por segunda vez. La renovación no fue casual: en la primera intervención habían constatado que un programa de SST bien estructurado no solo cumple con la NTS-009, sino que abre puertas comerciales al respaldar la participación en licitaciones y proyectos con clientes finales que exigen documentación de SST vigente." },
      { t: "h", v: "Diagnóstico" },
      { t: "ul", v: [
        "Los exámenes ocupacionales periódicos y post-ocupacionales eran obligatorios por norma pero no se estaban ejecutando de forma sistemática, comprometiendo la salud a largo plazo de un talento técnico difícil de reemplazar.",
        "La oferta genérica de primeros auxilios no cubría las particularidades de un shock de media o alta tensión, dejando al equipo sin protocolos específicos ante el evento que más lo amenaza.",
      ]},
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Implementación y posterior actualización del Programa de Gestión de Salud y Seguridad en el Trabajo alineado a la NTS-009.",
        "Capacitación en primeros auxilios diseñada específicamente para riesgos eléctricos de media y alta tensión.",
        "Gestión activa de los exámenes ocupacionales periódicos, coordinando con el gestor de salud la ejecución efectiva de radiografías, exámenes de vista y demás controles requeridos.",
        "Reevaluación de riesgos ergonómicos y de fatiga visual en la fase de diseño en oficina.",
        "Actualización de monitoreos de iluminación, ruido y ventilación.",
        "Implementación de rutas de evacuación, señalética y planes de emergencia.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "El cliente hoy cuenta con un programa SST vigente que respalda su participación en licitaciones frente a clientes finales que exigen documentación auditable. Los exámenes ocupacionales dejaron de ser una obligación postergada para convertirse en una práctica sistemática, protegiendo la salud a largo plazo del equipo especializado. Y el personal cuenta con capacitación específica para responder ante el evento más crítico del rubro." },
      { t: "h", v: "Un caso que confirma la propuesta de valor" },
      { t: "p", v: "Que un cliente renueve su contrato es, en sí mismo, un indicador de valor. Para una firma técnica de alta especialización, un programa de SST bien implementado no es un gasto de cumplimiento: es una inversión que protege al talento, resguarda la continuidad operativa y habilita el crecimiento comercial." },
    ],
  },
  {
    slug: "club-social",
    tag: "Emergencias",
    tituloCorto: "Gestión de riesgos multi-área en un club social",
    titulo: "Club social y recreativo: preparación real ante una matriz de riesgos heterogénea",
    excerpt: "Mapeo en campo, Comité Mixto, simulacros con tiempos medidos y capacitación transversal para un club con membresía de alto perfil.",
    fotos: 10,
    publicado: true,
    cuerpo: [
      { t: "p", v: "Un club social y recreativo con oferta multi-servicio —restaurante, piscina, escuela de natación, atención de salón y administración— gestiona a diario una matriz de riesgos particularmente heterogénea: incendio en cocina, riesgo hídrico en piscina, atención al público y convulsiones sociales dentro y fuera del recinto. Cuando la base social incluye además miembros de alto perfil y cuerpo diplomático, aparecen amenazas externas poco habituales —robo, armas de fuego, amenazas de bomba— que exigen un tratamiento específico dentro del plan de emergencias." },
      { t: "p", v: "Con más de 30 trabajadores distribuidos entre áreas muy distintas, la NTS-009 exige al club conformar un Comité Mixto, contar con plan de emergencias, señalética normada y un programa SST completo. Saetas Prevención fue convocada para construir todo esto desde la base: antes de la intervención no existían procedimientos formales de evacuación, tiempos medidos ni brigadas capacitadas." },
      { t: "h", v: "Diagnóstico en el terreno" },
      { t: "p", v: "El equipo de Saetas realizó visitas de campo durante varios días para observar los flujos de trabajo reales de cada área, y entrevistó a trabajadores de cocina, piscina, salón y administración para levantar los riesgos desde su propia experiencia. Este mapeo reveló, entre otras mejoras críticas, que los sistemas de alarma no eran independientes de la energía eléctrica —un punto ciego ante cortes de energía o sabotaje deliberado." },
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Conformación del Comité Mixto de Bienestar e Higiene Ocupacional.",
        "Simulacros de evacuación con medición de tiempos desde cada punto de la infraestructura.",
        "Identificación de mejoras críticas en rutas y sistemas de alarma, incluyendo alarmas independientes de la energía eléctrica según norma.",
        "Capacitación en primeros auxilios para el personal de todas las áreas.",
        "Capacitación en uso y manejo de extintores con práctica real de cada trabajador.",
        "Incorporación de escenarios de amenaza externa al plan de emergencias, acorde al perfil de la membresía.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "El club pasó de no tener procedimientos formales a operar con un Comité Mixto activo, simulacros validados con tiempos medidos y personal capacitado para responder ante escenarios que van desde un incendio en cocina hasta una amenaza externa dirigida. Para una institución cuya reputación y responsabilidad civil se magnifican con el perfil de sus miembros, esa preparación es un activo de continuidad — y la base sobre la cual se proyectan capacitaciones sectoriales específicas, como manipulación de alimentos en cocina y primeros auxilios acuáticos en piscina." },
    ],
  },
  {
    slug: "club-automovilistico",
    tag: "Multi-servicio",
    tituloCorto: "Gestión de riesgos por área en un club automovilístico",
    titulo: "Un club automovilístico multi-servicio: gestión de riesgos por área en un portafolio complejo",
    excerpt: "Tres ciclos de colaboración, riesgos gestionados por área y documentación alineada a ISO 9001/45001.",
    fotos: 4,
    publicado: true,
    cuerpo: [
      { t: "p", v: "Un club automovilístico con más de 100 empleados enfrenta un desafío particular: cada uno de sus servicios —estación de gasolina, restaurante, salón de eventos, piscina, escuela de manejo— implica un perfil de riesgo distinto y crítico. Ninguna implementación puntual resuelve esta complejidad. Se requiere un enfoque estructurado, sostenido en el tiempo y alineado a estándares internacionales." },
      { t: "p", v: "Este cliente confió en Saetas Prevención por tres ciclos consecutivos, atendiendo dos sucursales. La relación de largo plazo permitió no solo cumplir con la NTS-009 —que a partir de 100+ empleados obliga a conformar Comité Mixto, gestionar riesgos por puesto, ejecutar monitoreos, capacitaciones y ejercicios recurrentes— sino avanzar hacia una cultura preventiva madura, con documentación alineada a los estándares ISO 9001 e ISO 45001. Este último punto era clave dada la ambición organizacional de certificarse en ISO 9001." },
      { t: "h", v: "Diagnóstico" },
      { t: "ul", v: [
        "La estación de gasolina, con manejo de sustancias controladas, exige protocolos específicos y está bajo escrutinio regulatorio adicional.",
        "La cocina y el restaurante concentran riesgos de incendio y quemaduras.",
        "La piscina implica riesgo hídrico.",
        "La escuela de manejo introduce riesgos vehiculares.",
      ]},
      { t: "p", v: "Adicionalmente, mantener consistencia entre las dos sucursales —con infraestructura y perfiles de servicios distintos— requería un abordaje que evitara la fragmentación operativa y sostuviera la cultura preventiva en el tiempo." },
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Identificación de peligros y evaluación de riesgos por puesto de trabajo.",
        "Conformación del Comité Mixto de Higiene y Seguridad Ocupacional.",
        "Capacitación en primeros auxilios para todo el personal.",
        "Capacitación específica en manejo de sustancias controladas para el equipo de la estación de gasolina.",
        "Monitoreos de iluminación, ruido y ventilación por sucursal.",
        "Simulacros de emergencia recurrentes.",
        "Documentación estructurada bajo estándares alineados a ISO 9001 e ISO 45001, dejando la organización preparada para una eventual certificación.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "Tres ciclos consecutivos de colaboración generaron un beneficio que va más allá del cumplimiento normativo. La organización consolidó una cultura de gestión de riesgos donde cada área conoce sus peligros, cada sucursal opera con planes propios pero consistentes, y la documentación existente está lista para respaldar una futura certificación ISO. Cada renovación de contrato es también una oportunidad para actualizar índices de accidentabilidad y comparar mejoras ciclo tras ciclo." },
      { t: "h", v: "El valor de la continuidad" },
      { t: "p", v: "Este caso demuestra que la prevención no es un evento puntual: es una práctica sostenida. Las empresas que integran ciclos recurrentes de actualización, capacitación y auditoría interna construyen un activo intangible pero decisivo: una cultura de riesgo controlada que las diferencia comercialmente y las protege operativamente." },
    ],
  },
  {
    slug: "red-pagos-electronicos",
    tag: "Salud mental",
    tituloCorto: "Gestión del estrés en una red de pagos electrónicos",
    titulo: "Gestión del estrés laboral y prevención de burnout en una red líder de pagos electrónicos",
    excerpt: "Talleres especializados de manejo de estrés y prevención de burnout para más de 180 trabajadores del sector financiero-electrónico.",
    fotos: 3,
    publicado: true,
    cuerpo: [
      { t: "p", v: "La normativa boliviana de SST reconoce la salud mental como un riesgo laboral gestionable. Para una organización de más de 180 trabajadores, gestionar el estrés y el burnout con evidencia documentada no es opcional: es parte del deber de cuidado — y de la exposición legal — de la empresa." },
      { t: "p", v: "Una red líder en Bolivia de administración de pagos electrónicos —procesamiento de transacciones, administración de cajeros automáticos y tarjetas de crédito y débito— convocó a Saetas Prevención para una intervención enfocada en salud mental ocupacional. Su operación transaccional continua, con multitasking permanente y presión sostenida, es terreno fértil para el síndrome de burnout: agotamiento mental y emocional que impacta la productividad, el clima laboral, la salud física y las relaciones interpersonales." },
      { t: "h", v: "El desafío" },
      { t: "ul", v: [
        "Burnout sin gestión formal, comenzando a impactar productividad y clima laboral.",
        "Afectación progresiva a la autoestima y personalidad del trabajador, con efectos colaterales en el equipo.",
        "Riesgo de enfermedades físicas derivadas del agotamiento prolongado, con costos crecientes de ausentismo.",
        "Riesgo de fuga de talento especializado: en el sector técnico-financiero, la rotación por burnout representa pérdida directa de conocimiento crítico.",
        "Ausencia de herramientas prácticas en manos del trabajador para autogestionar el estrés en su día a día.",
      ]},
      { t: "h", v: "Intervención" },
      { t: "p", v: "Saetas Prevención desplegó talleres de gestión del estrés laboral y prevención de burnout facilitados por una psicóloga organizacional experta. El programa entregó herramientas y técnicas prácticas transferibles al día a día del trabajador, con enfoque en la modificación de condiciones de trabajo, el acompañamiento del personal y la sensibilización sobre los síntomas progresivos del burnout para habilitar la intervención temprana." },
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "La organización incorporó la salud mental ocupacional a su gestión formal de riesgos, con talleres documentados que respaldan su deber de cuidado. Los trabajadores cuentan ahora con herramientas concretas de autogestión del estrés, y la organización con un lenguaje común para detectar y atender el burnout antes de que escale — protegiendo a la vez a las personas y al conocimiento crítico del negocio." },
    ],
  },
  {
    slug: "cadena-supermercados",
    tag: "Multi-sucursal",
    tituloCorto: "Cumplimiento y protección real en cada sucursal",
    titulo: "Una cadena líder de supermercados: cumplimiento normativo y protección real en cada sucursal",
    excerpt: "Simulacros con la Policía Boliviana, brigadas conformadas y control de estrés térmico en una operación multi-sucursal.",
    fotos: 7,
    publicado: true,
    cuerpo: [
      { t: "p", v: "Operar una cadena de supermercados en Bolivia implica gestionar simultáneamente cumplimiento normativo replicado en cada sucursal, riesgos operativos que van desde el estrés térmico hasta el robo con armas de fuego, y una alta responsabilidad reputacional propia de una marca líder. La NTS-009 aplica por sucursal —señalética, monitoreos, brigadas, simulacros y documentación—, y con cada punto de venta la exposición ante inspecciones se multiplica." },
      { t: "p", v: "Una cadena líder del sector, con más de 150 trabajadores atendidos en tres o más sucursales de La Paz y El Alto —incluyendo grandes, medianas y pequeñas—, confió en Saetas Prevención para implementar y luego actualizar su Programa de SST. La operación incluye producción propia integrada: carnicería, cocina, panadería y repostería, lo que agrega complejidad a la matriz de riesgos." },
      { t: "h", v: "Diagnóstico" },
      { t: "ul", v: [
        "Exposición real a robos con armas de fuego en piso de venta.",
        "Estrés térmico severo por doble exposición: los trabajadores pueden pasar de cocinas calientes a cámaras frigoríficas en la misma jornada.",
        "Riesgo de incendio concentrado en el área de cocina y producción propia.",
        "Alto flujo de clientes en piso, que multiplica el impacto de cualquier emergencia y suma responsabilidad civil frente a terceros.",
        "Ausencia previa de brigadas formalmente estructuradas y de simulacros validados con instituciones externas.",
        "Riesgo de inconsistencia entre sucursales, dada la diferencia de tamaños e infraestructuras.",
      ]},
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Señalética y planos de evacuación adaptados a la infraestructura específica de cada punto de venta.",
        "Simulacros de evacuación con escenarios reales, incluyendo robos con armas de fuego, coordinados directamente con la Policía Boliviana.",
        "Capacitación en uso y manejo de extintores con práctica real de cada trabajador.",
        "Monitoreo de estrés térmico en cocina caliente y cámaras frigoríficas, con implementación de pausas activas.",
        "Validación del equipamiento adecuado por área (trajes térmicos, indumentaria de cocina).",
        "Conformación de brigadas de evacuación, contra incendios y primeros auxilios.",
        "Monitoreos de iluminación, ruido y ventilación en cada sucursal.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "La cadena hoy opera con brigadas conformadas y capacitadas, planes de evacuación validados por escenario, y control activo del estrés térmico. La coordinación con la Policía Boliviana para simulacros de robo agregó una capa de preparación difícil de replicar en el sector. Cada sucursal cuenta con su propio plan adaptado a su infraestructura, garantizando consistencia sin perder especificidad. Y el cumplimiento normativo, verificable en cada punto de venta, protege a la marca ante inspecciones que pueden caer en cualquiera de las sucursales." },
      { t: "h", v: "Referencia del rubro en gestión ocupacional" },
      { t: "p", v: "Este caso posiciona al cliente como referente del sector en Bolivia en materia de salud ocupacional. La actualización continua del programa demuestra un compromiso real de la organización con la seguridad de sus trabajadores y clientes —un diferencial que trasciende el cumplimiento normativo y se convierte en un atributo de marca." },
    ],
  },
  {
    slug: "formacion-sippci",
    tag: "Formación",
    tituloCorto: "Formación certificada en normativa SIPPCI",
    titulo: "Formar profesionales para operar bajo la norma SIPPCI: alianza académica con validez institucional",
    excerpt: "Diplomado de certificación en prevención contra incendios, en alianza con Unifranz, orientado a la aplicación práctica.",
    fotos: 1,
    publicado: true,
    cuerpo: [
      { t: "p", v: "En Bolivia, la normativa SIPPCI —Sistema Integrado de Protección Contra Incendios, desarrollada por el Cuerpo de Bomberos— es de cumplimiento obligatorio y de alta complejidad técnica. Cubre desde el mantenimiento de sistemas de protección contra incendios hasta el cálculo de carga de fuego, los servicios de hidrantes, medidas específicas para edificios de altura, centros comerciales y hoteles, instalaciones eléctricas, ductos de distribución de aire y almacenamiento de materiales inflamables. Un profesional que aspira a ejercer legalmente en protección contra incendios necesita, sin excepción, obtener el diplomado que acredita competencia en esta norma." },
      { t: "p", v: "El mercado, sin embargo, arrastra dos problemas: una oferta académica limitada en programas robustos con respaldo institucional, y una brecha frecuente entre la formación teórica y la aplicación práctica que un proyecto real exige." },
      { t: "h", v: "Nuestra respuesta: un diplomado en alianza con Unifranz" },
      { t: "p", v: "Saetas Prevención diseñó y ejecuta un diplomado de certificación en alianza con Unifranz, dirigido a profesionales del área de seguridad industrial, prevención y bomberos que necesitan acreditarse formalmente para ejercer." },
      { t: "ul", v: [
        "Contenido curricular alineado con la totalidad de los requisitos SIPPCI.",
        "Enfoque práctico para que los egresados puedan aplicar la norma en proyectos reales: edificios de altura, centros comerciales, hoteles y edificaciones especiales.",
        "Respaldo institucional que otorga validez profesional a la credencial obtenida.",
      ]},
      { t: "h", v: "Valor para los profesionales y para el mercado" },
      { t: "p", v: "Los egresados salen del programa con la acreditación que necesitan para ejercer legalmente, pero también con las herramientas prácticas para aplicar la norma en el terreno. Constructoras, centros comerciales, hoteles y edificaciones especiales encuentran así una oferta creciente de especialistas verificados en un mercado que hoy tiene demanda insatisfecha." },
      { t: "h", v: "Formación continua para una norma en evolución" },
      { t: "p", v: "La norma SIPPCI evoluciona con nuevos escenarios —edificaciones especiales, materiales inflamables emergentes— y los profesionales necesitan actualizarse. Este diplomado no es un evento único: es una pieza en la construcción de una comunidad profesional preparada para responder a los retos actuales y futuros de la protección contra incendios en Bolivia." },
    ],
  },
  {
    slug: "distribuidor-insumos-medicos",
    tag: "Multi-sucursal",
    tituloCorto: "Estandarizar la gestión de riesgos en 9 sucursales",
    titulo: "Estandarizar la gestión de riesgos en una red multi-sucursal: caso de un distribuidor de insumos médicos",
    excerpt: "Programa SST desplegado en 9 sucursales con planes de evacuación por infraestructura y validación por tiempos.",
    fotos: 0,
    publicado: false, // pendiente de fotos del cliente
    cuerpo: [
      { t: "p", v: "Cuando una organización con conocimiento en seguridad ya existente opera con una red de nueve sucursales de infraestructuras distintas, el reto no es enseñar los fundamentos: es formalizar y estandarizar. Sin formalización, el conocimiento no se traduce en respuesta operativa consistente ni en cumplimiento normativo demostrable. Y en un rubro como la comercialización de insumos médicos, las exigencias sanitarias adicionales se combinan con las de Salud y Seguridad en el Trabajo, elevando la complejidad regulatoria." },
      { t: "p", v: "Un grupo distribuidor de insumos médicos en Bolivia, con nueve sucursales en la ciudad de La Paz y empresas relacionadas bajo el mismo paraguas corporativo, contrató a Saetas Prevención para implementar su Programa de SST en la totalidad de sus puntos operativos." },
      { t: "h", v: "Diagnóstico" },
      { t: "ul", v: [
        "Personal con base sólida de conocimiento en seguridad, pero sin gestión de riesgos formalizada y verificable por sucursal.",
        "Nueve infraestructuras diferentes que hacen inviables los planes de evacuación estandarizados.",
        "Riesgo de variabilidad en la respuesta ante emergencias entre sucursales.",
        "Requerimientos regulatorios adicionales propios del rubro sanitario.",
        "Complejidad de consolidación documental entre las empresas relacionadas del grupo.",
        "Una inspección del Ministerio de Trabajo puede caer sobre cualquiera de las nueve sucursales, multiplicando la exposición ante la NTS-009.",
      ]},
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Programa integral de SST alineado a la NTS-009 en las nueve sucursales.",
        "Monitoreos de iluminación, ruido y ventilación en cada sucursal.",
        "Señalética y planos de evacuación adaptados a la infraestructura específica de cada sucursal.",
        "Simulacros de evacuación con validación de tiempos por sucursal.",
        "Estudio de carga de fuego.",
        "Políticas de salud ocupacional formalizadas e identificación de peligros por sucursal.",
        "Capacitación específica en estrés laboral, complementaria al alto nivel de conocimiento existente.",
        "Asesoramiento sobre seguros de corto y largo plazo —jubilación y cobertura médica— para claridad del trabajador.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "El grupo hoy opera con una gestión de riesgos formalizada y consistente en las nueve sucursales, transformando el conocimiento existente en respuesta operativa verificable. Los planes de evacuación están adaptados a cada infraestructura y validados por tiempos, garantizando consistencia sin perder especificidad. La documentación consolidada facilita la respuesta ante inspecciones en cualquier sucursal y ante los requerimientos regulatorios del rubro sanitario." },
      { t: "h", v: "Cuando el reto es la estandarización, no la enseñanza" },
      { t: "p", v: "Este caso demuestra que la propuesta de valor de Saetas Prevención se adapta al punto de madurez del cliente. En organizaciones con conocimiento previo, el foco se desplaza hacia la formalización, la estandarización y la consolidación documental —tres capacidades que convierten el conocimiento individual en un activo organizacional replicable y auditable." },
    ],
  },
  {
    slug: "entidad-financiera",
    tag: "Oficinas",
    tituloCorto: "SST en un entorno 100% administrativo",
    titulo: "Salud y Seguridad Ocupacional en un entorno 100% administrativo: por qué no es opcional",
    excerpt: "Programa SST para oficinas con foco en ergonomía y estrés laboral, más plan de evacuación y simulacros en sitio.",
    fotos: 0,
    publicado: false, // pendiente de fotos del cliente
    cuerpo: [
      { t: "p", v: "Cuando una organización opera exclusivamente en oficinas administrativas, es común subestimar los riesgos laborales. La percepción de \"aquí no pasa nada grave\" genera una parálisis del liderazgo para invertir en prevención. Sin embargo, la NTS-009 no distingue entre operación industrial y oficina administrativa: la exigencia es la misma, y también lo son las sanciones ante inspecciones que encuentren brechas." },
      { t: "p", v: "Una entidad financiera boliviana enfocada en la captación de fondos para la seguridad de largo plazo de los trabajadores, con equipo 100% administrativo, contrató a Saetas Prevención para implementar su Programa de Seguridad y Salud en el Trabajo. La organización opera bajo el escrutinio adicional del sector financiero regulado, donde la formalidad y la auditoría cruzada son parte del ADN operativo." },
      { t: "h", v: "Diagnóstico" },
      { t: "ul", v: [
        "Estrés laboral propio de una operación financiera con presión de resultados.",
        "Riesgos ergonómicos por posturas prolongadas frente a computadoras, con impacto acumulativo en salud musculoesquelética.",
        "Fatiga visual y cansancio mental crónico.",
        "Ausencia total de preparación real ante una emergencia en una oficina de altura urbana: el personal nunca había ejecutado un simulacro y no existía un plan formal de evacuación para el edificio.",
      ]},
      { t: "h", v: "Intervención" },
      { t: "ul", v: [
        "Programa integral de Seguridad y Salud en el Trabajo alineado a la NTS-009, adaptado al entorno administrativo.",
        "Identificación de riesgos con foco explícito en estrés laboral y ergonomía.",
        "Capacitaciones específicas para el equipo administrativo.",
        "Plan de evacuación y simulacros ejecutados en sitio.",
        "Sensibilización sobre los riesgos silenciosos del trabajo de oficina.",
      ]},
      { t: "h", v: "Valor entregado" },
      { t: "p", v: "La organización pasó de una situación de subestimación de riesgos a contar con un programa de SST verificable, documentado y auditable. El personal, por primera vez, ejecutó simulacros reales y conoce las rutas de evacuación de su edificio. Las estaciones de trabajo fueron evaluadas ergonómicamente, reduciendo el pasivo silencioso de dolencias musculoesqueléticas acumuladas. Y el liderazgo cuenta ahora con evidencia documental para respaldar el cumplimiento normativo tanto ante el Ministerio de Trabajo como ante los reguladores del sector financiero." },
      { t: "h", v: "Un mensaje para las empresas de servicios" },
      { t: "p", v: "Este caso demuestra que el cumplimiento y la protección real del trabajador aplican con la misma exigencia en un entorno administrativo que en uno industrial. Las organizaciones de servicios que reconocen este principio temprano evitan el costo silencioso de la subestimación y construyen un entorno de trabajo que soporta la ambición operativa y comercial." },
    ],
  },
];

export const casosPublicados = casos.filter((c) => c.publicado);
export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);
