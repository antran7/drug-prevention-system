import { useState } from 'react';
import { FaTh, FaList } from 'react-icons/fa';
import { moduleSections } from '../../data/moduleSections';

export default function ModuleGrid() {
    const [view, setView] = useState('grid');
    const [search, setSearch] = useState('');

    return (
        <div className="space-y-10">
            {/* Search & View Toggle */}
            <div className="flex items-center justify-between gap-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search modules..."
                    className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm"
                />
                <div className="flex gap-2">
                    <button
                        onClick={() => setView('grid')}
                        className={`px-3 py-2 rounded ${view === 'grid' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
                    >
                        <FaTh /> Grid
                    </button>
                    <button
                        onClick={() => setView('list')}
                        className={`px-3 py-2 rounded ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-white border'}`}
                    >
                        <FaList /> List
                    </button>
                </div>
            </div>

            {/* Render by Sections */}
            {moduleSections.map((section, idx) => {
                const filteredItems = section.items.filter((item) =>
                    item.label.toLowerCase().includes(search.toLowerCase())
                );

                if (filteredItems.length === 0) return null;

                const SectionIcon = section.icon;

                return (
                    <div key={idx} className="space-y-4">
                        <div className="flex items-center text-xl font-semibold gap-2">
                            <SectionIcon className="text-blue-500" />
                            {section.title}
                        </div>

                        <div className={view === 'grid'
                            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
                            : 'space-y-4'}>
                            {filteredItems.map((mod, idx2) => {
                                const ItemIcon = mod.icon;
                                return (
                                    <div
                                        key={idx2}
                                        className="bg-white rounded shadow p-4 flex items-start gap-4 hover:shadow-md"
                                    >
                                        <ItemIcon className="text-3xl text-blue-500" />
                                        <div>
                                            <div className="font-semibold text-blue-600 text-md">
                                                {mod.label}
                                            </div>
                                            <p className="text-sm text-gray-600">{mod.description}</p>
                                            <p className="text-xs text-gray-400 mt-1">Last used: Today</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
