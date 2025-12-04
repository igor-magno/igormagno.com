import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import {
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonText,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import {
    arrowForward,
    codeSlash,
    documentTextOutline,
    logoGithub,
    logoLinkedin,
    mailOutline,
} from 'ionicons/icons';
import { ReactNode } from 'react';
import './home.css';

const Section = {
    Root: ({
        children,
        className = '',
    }: {
        children: ReactNode;
        className?: string;
    }) => <section className={`section ${className}`}>{children}</section>,
    Content: ({
        children,
        className = '',
    }: {
        children: ReactNode;
        className?: string;
    }) => <div className={`section-content ${className}`}>{children}</div>,
    Title: ({
        children,
        subtitle,
    }: {
        children: ReactNode;
        subtitle?: string;
    }) => (
        <div className="section-title-container">
            <IonText color="dark">
                <h2 className="section-title">{children}</h2>
            </IonText>
            {subtitle && (
                <IonText color="medium">
                    <p className="section-subtitle">{subtitle}</p>
                </IonText>
            )}
        </div>
    ),
};

const ProjectCard = ({
    title,
    subtitle,
    description,
    technologies,
    imageUrl,
}: {
    title: string;
    subtitle: string;
    description: string;
    technologies: string[];
    imageUrl: string;
}) => (
    <IonCard className="project-card" mode="ios">
        <div className="project-image-container">
            <img alt={title} src={imageUrl} className="project-image" />
        </div>
        <IonCardHeader>
            <IonCardTitle color="dark" className="project-title">
                {title}
            </IonCardTitle>
            <IonCardSubtitle color="medium">{subtitle}</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
            <p className="project-description">{description}</p>
            <div className="project-technologies">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                        {tech}
                    </span>
                ))}
            </div>
        </IonCardContent>
    </IonCard>
);

const ContactItem = ({
    icon,
    label,
    value,
    href,
    color = 'primary',
}: {
    icon: any;
    label: string;
    value: string;
    href?: string;
    color?: string;
}) => (
    <IonItem
        className="contact-item"
        lines="none"
        color="light"
        button={!!href}
        href={href}
        target={href ? '_blank' : undefined}
    >
        <IonIcon aria-hidden="true" icon={icon} slot="start" color={color} />
        <IonLabel>
            <h3 className="contact-label">{label}</h3>
            <p className="contact-value">{value}</p>
        </IonLabel>
    </IonItem>
);

export default ({ canRegister = true }: { canRegister?: boolean }) => {
    const { auth, name } = usePage<SharedData>().props;

    const emailLink =
        'https://mail.google.com/mail/?view=cm&fs=1&to=igormagno.dev@gmail.com';
    const linkedinLink = 'https://www.linkedin.com/in/igor-magno/';

    const projects = [
        {
            title: 'Plataforma Web',
            subtitle: 'Design & Desenvolvimento',
            description:
                'Interface limpa e funcional com foco na experiência do usuário.',
            technologies: ['React', 'TypeScript', 'Tailwind'],
            imageUrl:
                'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'App Mobile',
            subtitle: 'iOS & Android',
            description:
                'Aplicativo nativo com design minimalista e performance otimizada.',
            technologies: ['React Native', 'Expo', 'Context API'],
            imageUrl:
                'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
        {
            title: 'Dashboard Analytics',
            subtitle: 'Visualização de Dados',
            description:
                'Painel de controle com gráficos interativos e relatórios em tempo real.',
            technologies: ['Next.js', 'Chart.js', 'PostgreSQL'],
            imageUrl:
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        },
    ];

    return (
        <>
            <IonMenu contentId="main-content" type="overlay" side="end">
                <IonHeader className="menu-header">
                    <IonToolbar color="light">
                        <IonTitle className="menu-title">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="menu-content" color="light">
                    <div className="menu-profile">
                        <div className="profile-icon">
                            <IonIcon
                                icon={codeSlash}
                                size="large"
                                color="primary"
                            />
                        </div>
                        <h3 className="profile-name">Desenvolvedor</h3>
                        <p className="profile-bio">
                            Soluções digitais minimalistas
                        </p>
                    </div>
                    <IonList lines="none" className="menu-list">
                        <IonItem
                            button
                            className="menu-item"
                            color="light"
                            href="#projects"
                        >
                            <IonIcon
                                icon={documentTextOutline}
                                slot="start"
                                color="primary"
                            />
                            <IonLabel>Projetos</IonLabel>
                        </IonItem>
                        <IonItem
                            button
                            className="menu-item"
                            color="light"
                            href="#contact"
                        >
                            <IonIcon
                                icon={mailOutline}
                                slot="start"
                                color="primary"
                            />
                            <IonLabel>Contato</IonLabel>
                        </IonItem>
                    </IonList>
                    <div className="menu-social">
                        <IonButton
                            fill="clear"
                            color="medium"
                            size="small"
                            href={emailLink}
                            target="_blank"
                        >
                            <IonIcon icon={mailOutline} />
                        </IonButton>
                        <IonButton
                            fill="clear"
                            color="medium"
                            size="small"
                            href={linkedinLink}
                            target="_blank"
                        >
                            <IonIcon icon={logoLinkedin} />
                        </IonButton>
                    </div>
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader className="main-header" collapse="fade">
                    <IonToolbar color="light" className="main-toolbar">
                        <IonButtons slot="start">
                            <IonTitle className="logo-title">{name}</IonTitle>
                        </IonButtons>

                        {/* Botões de navegação - visíveis apenas em desktop */}
                        <IonButtons slot="end" className="desktop-nav">
                            <IonButton
                                className="nav-button"
                                fill="clear"
                                color="dark"
                                href="#projects"
                            >
                                Projetos
                            </IonButton>
                            <IonButton
                                className="nav-button"
                                fill="clear"
                                color="dark"
                                href="#contact"
                            >
                                Contato
                            </IonButton>
                        </IonButtons>

                        {/* Menu button - visível apenas em mobile */}
                        <IonButtons slot="end" className="mobile-menu">
                            <IonMenuButton
                                className="menu-button"
                                color="dark"
                            />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="main-content" color="light">
                    {/* Hero Section */}
                    <Section.Root className="hero-section">
                        <Section.Content className="hero-content">
                            <div className="hero-container">
                                <IonText color="dark">
                                    <h1 className="hero-title">
                                        Design Minimalista,
                                        <br />
                                        <span className="highlight">
                                            Resultados Máximos
                                        </span>
                                    </h1>
                                </IonText>
                                <IonText color="medium">
                                    <p className="hero-subtitle">
                                        Crio experiências digitais limpas,
                                        funcionais e focadas no essencial.
                                    </p>
                                </IonText>
                                <div className="hero-actions">
                                    <IonButton
                                        color="primary"
                                        fill="solid"
                                        className="primary-button"
                                        href="#contact"
                                    >
                                        Contato
                                        <IonIcon
                                            icon={arrowForward}
                                            slot="end"
                                        />
                                    </IonButton>
                                </div>
                            </div>
                        </Section.Content>
                    </Section.Root>

                    {/* Projects Section */}
                    <div id="projects" />
                    <Section.Root className="projects-section">
                        <Section.Content>
                            <Section.Title subtitle="Projetos selecionados com foco em design limpo e usabilidade">
                                Trabalhos Recentes
                            </Section.Title>
                            <div className="projects-grid">
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </div>
                            {/* <div className="view-all-container">
                                <IonButton
                                    fill="clear"
                                    color="primary"
                                    routerLink="/projects"
                                >
                                    Ver todos os projetos
                                    <IonIcon icon={arrowForward} slot="end" />
                                </IonButton>
                            </div> */}
                        </Section.Content>
                    </Section.Root>

                    {/* Contact Section */}
                    <div id="contact" />
                    <Section.Root className="contact-section">
                        <Section.Content>
                            <Section.Title subtitle="Entre em contato para discutir seu projeto">
                                Vamos Conversar
                            </Section.Title>
                            <div className="contact-cards">
                                <IonCard
                                    className="contact-card"
                                    mode="ios"
                                    href={emailLink}
                                    target="_blanck"
                                >
                                    <IonCardHeader>
                                        <IonCardTitle color="dark">
                                            <IonIcon
                                                icon={mailOutline}
                                                color="primary"
                                            />{' '}
                                            Email
                                        </IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonText color="dark">
                                            <p className="contact-info">
                                                igormagno.dev@gmail.com
                                            </p>
                                        </IonText>
                                    </IonCardContent>
                                </IonCard>
                                <IonCard
                                    className="contact-card"
                                    mode="ios"
                                    href={linkedinLink}
                                    target="_blanck"
                                >
                                    <IonCardHeader>
                                        <IonCardTitle color="dark">
                                            <IonIcon
                                                icon={logoLinkedin}
                                                color="primary"
                                            />{' '}
                                            Linkedin
                                        </IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonText color="dark">
                                            <p className="contact-info">
                                                Igor Magno
                                            </p>
                                        </IonText>
                                    </IonCardContent>
                                </IonCard>
                            </div>
                        </Section.Content>
                    </Section.Root>

                    {/* Footer */}
                    <div
                        className="footer-section"
                        style={{ paddingBottom: 100 }}
                    >
                        <IonText color="medium">
                            <p className="footer-text">
                                © {new Date().getFullYear()} {name}
                            </p>
                            <p className="footer-subtext">
                                Desenvolvido com simplicidade
                            </p>
                        </IonText>
                    </div>
                </IonContent>
            </IonPage>
        </>
    );
};
