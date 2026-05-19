import { useEffect } from 'react';
import { Outlet, NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { getProfile, clearSession } from '../lib/api';
import NotificationBell from '../components/NotificationBell';

const NAV = {
  kominiarz: [
    { to: '/panel/kominiarz', label: 'Dashboard' },
    { to: '/panel/kominiarz/kalendarz', label: 'Kalendarz' },
    { to: '/panel/kominiarz/wizyty', label: 'Wizyty' },
    { to: '/panel/kominiarz/klienci', label: 'Obiekty / Klienci' },
    { to: '/panel/kominiarz/nba', label: 'Next Best Action' },
    { to: '/panel/kominiarz/oferty', label: 'Oferty / Upsell' },
    { to: '/panel/kominiarz/leady', label: 'Leady' },
    { to: '/panel/kominiarz/zgloszenia', label: 'Zgłoszenia' },
    { to: '/panel/kominiarz/magic-linki', label: 'Magic linki' },
    { to: '/panel/kominiarz/ustawienia', label: 'Ustawienia' },
  ],
  zarzadca: [
    { to: '/panel/spoldzielnia', label: 'Dashboard' },
    { to: '/panel/spoldzielnia/obiekty', label: 'Obiekty' },
    { to: '/panel/spoldzielnia/zgloszenia', label: 'Zgłoszenia' },
    { to: '/panel/spoldzielnia/raporty', label: 'Raporty' },
  ],
  mieszkaniec: [
    { to: '/panel/mieszkaniec', label: 'Moje mieszkanie' },
    { to: '/panel/mieszkaniec/termin', label: 'Umów wizytę' },
    { to: '/panel/mieszkaniec/historia', label: 'Historia kontroli' },
    { to: '/panel/mieszkaniec/oferty', label: 'Oferty dla mnie' },
    { to: '/panel/mieszkaniec/zgloszenie', label: 'Zgłoś usterkę' },
  ],
  admin: [
    { to: '/panel/admin', label: 'Dashboard' },
    { to: '/panel/admin/users', label: 'Użytkownicy' },
    { to: '/panel/admin/dane', label: 'Dane biznesowe' },
    { to: '/panel/admin/magic-links', label: 'Magic linki' },
    { to: '/panel/admin/leads', label: 'Leady' },
    { to: '/panel/admin/zgloszenia', label: 'Zgłoszenia' },
    { to: '/panel/admin/cms', label: 'CMS strony' },
    { to: '/panel/admin/audit', label: 'Audit log' },
    { to: '/panel/kominiarz', label: '→ Tryb kominiarza' },
  ],
};

const ROLE_LABEL = { kominiarz: 'Kominiarz', zarzadca: 'Zarządca / Spółdzielnia', mieszkaniec: 'Mieszkaniec', admin: 'Administrator' };

export default function PanelLayout() {
  const nav = useNavigate();
  const loc = useLocation();
  const profile = getProfile();

  useEffect(() => {
    if (!profile) nav('/login');
  }, [profile, nav]);

  if (!profile) return null;

  const menu = NAV[profile.role] || NAV.kominiarz;

  function logout() {
    clearSession();
    nav('/login');
  }

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside className="w-64 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-5 py-5 border-b border-slate-800 flex items-center justify-between">
          <Link to="/" className="block">
            <div className="text-lg font-bold text-orange-400">GS Instal</div>
            <div className="text-xs text-slate-400">Panel CRM</div>
          </Link>
          <NotificationBell />
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {menu.map(item => (
            <NavLink
              key={item.to} to={item.to} end={item.to.split('/').length <= 3}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm ${isActive ? 'bg-orange-500 text-white' : 'text-slate-300 hover:bg-slate-800'}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-400">
          <div className="font-semibold text-slate-200">{profile.full_name}</div>
          <div>{ROLE_LABEL[profile.role]}</div>
          <div className="truncate">{profile.email}</div>
          <Link to="/panel/profil" className="mt-3 block text-slate-300 hover:text-white text-sm">⚙ Mój profil</Link>
          <button onClick={logout} className="mt-1 w-full text-left text-rose-400 hover:text-rose-300 text-sm">Wyloguj</button>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <div className="px-8 py-6 max-w-7xl mx-auto">
          <Outlet key={loc.pathname} />
        </div>
      </main>
    </div>
  );
}
