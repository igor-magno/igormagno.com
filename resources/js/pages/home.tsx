import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default ({ canRegister = true }: { canRegister?: boolean }) => {
    const { auth } = usePage<SharedData>().props;

    return (
        <div style={{ minHeight: '100vh', background: '#f5f5f5', color: '#333', fontFamily: 'Arial, sans-serif' }}>
            {/* Hero Section */}
            <section
                style={{
                    padding: '80px 20px',
                    textAlign: 'center',
                    background: '#fff',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                }}
            >
                <h1 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '20px' }}>
                    Olá, eu sou {auth?.user?.name || 'um Desenvolvedor'}
                </h1>
                <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
                    Desenvolvedor Back-end e Front-end desde 2018, criando soluções modernas, performáticas
                    e escaláveis com PHP (Laravel), Node.js, React, Ionic e muito mais.
                </p>
                <div style={{ marginTop: '25px' }}>
                    <a
                        href="#projetos"
                        style={{
                            padding: '12px 30px',
                            background: '#1e73be',
                            color: '#fff',
                            borderRadius: '8px',
                            textDecoration: 'none'
                        }}
                    >
                        Ver Projetos
                    </a>
                </div>
            </section>

            {/* Sobre */}
            <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }} id="sobre">
                <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '20px' }}>Sobre Mim</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
                    Sou um desenvolvedor com mais de 6 anos de experiência criando aplicações completas
                    envolvendo API, interface, banco de dados e integrações complexas. Trabalho tanto no
                    Back-end quanto no Front-end, sempre priorizando boas práticas, arquitetura limpa,
                    performance e experiência do usuário.
                </p>
            </section>

            {/* Habilidades */}
            <section style={{ padding: '60px 20px', background: '#eaeaea' }} id="habilidades">
                <h2 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom: '40px' }}>
                    Principais Habilidades
                </h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '20px',
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}
                >
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Back-end</h3>
                        <p>PHP (Laravel, Lumen), Node.js, MySQL, PostgreSQL, APIs REST, SOLID.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Front-end</h3>
                        <p>React, Next.js, Ionic, HTML, CSS, JavaScript, Bootstrap.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Infraestrutura</h3>
                        <p>Docker, Git, CI/CD, Linux, Clean Architecture.</p>
                    </div>
                </div>
            </section>

            {/* Projetos */}
            <section style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto' }} id="projetos">
                <h2 style={{ textAlign: 'center', fontSize: '30px', fontWeight: 'bold', marginBottom: '40px' }}>
                    Projetos Recentes
                </h2>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '20px'
                    }}
                >
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Sistema ERP - SysPart</h3>
                        <p>ERP criado para pequenas e médias empresas com módulos de vendas, estoque e fiscal.</p>
                    </div>
                    <div style={{ background: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
                        <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>Mini Sena App</h3>
                        <p>Aplicativo de participação em sorteios e mensagens de sorte com gamificação.</p>
                    </div>
                </div>
            </section>

            {/* Contato */}
            <section
                style={{
                    padding: '80px 20px',
                    textAlign: 'center',
                    background: '#fff',
                    boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05)'
                }}
                id="contato"
            >
                <h2 style={{ fontSize: '30px', fontWeight: 'bold', marginBottom: '15px' }}>Entre em Contato</h2>
                <p style={{ marginBottom: '25px' }}>
                    Vamos conversar sobre projetos, colaborações ou oportunidades.
                </p>
                <a
                    href="mailto:igormagno.dev@gmail.com"
                    style={{
                        padding: '12px 30px',
                        background: '#28a745',
                        color: '#fff',
                        borderRadius: '8px',
                        textDecoration: 'none'
                    }}
                >
                    Enviar E-mail
                </a>
            </section>
        </div>
    );
}
