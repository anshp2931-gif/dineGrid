import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Mail, Phone } from 'lucide-react';
import AdminLayout from '../../components/admin/AdminLayout';

const staffMembers = [
  { id: 'S01', name: 'Sarah Jenkins', role: 'Head Server', shift: 'Morning', status: 'On Duty', avatar: 'SJ', color: '#006e1c' },
  { id: 'S02', name: 'Michael Chen', role: 'Chef', shift: 'Evening', status: 'Off Duty', avatar: 'MC', color: '#ff9800' },
  { id: 'S03', name: 'David Smith', role: 'Bartender', shift: 'Night', status: 'On Duty', avatar: 'DS', color: '#c2185b' },
  { id: 'S04', name: 'Emma Wilson', role: 'Hostess', shift: 'Morning', status: 'On Break', avatar: 'EW', color: '#1976d2' },
];

const Staff = () => (
  <AdminLayout>
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#171d16]">Staff Management</h1>
          <p className="text-sm text-[#6f7a6b] mt-0.5">Manage your team, roles, and shifts</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#006e1c] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-[#005016] transition">
            <Plus className="w-4 h-4" /> Add Staff
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {staffMembers.map(staff => (
          <div key={staff.id} className="bg-white rounded-xl border border-[#becab9] p-5 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-3" style={{ background: staff.color }}>
              {staff.avatar}
            </div>
            <h3 className="font-bold text-[#171d16]">{staff.name}</h3>
            <p className="text-xs text-[#6f7a6b] mb-3">{staff.role}</p>
            
            <div className="flex gap-2 w-full mb-4">
              <span className="flex-1 bg-[#f5fbef] text-[#3f4a3c] text-xs font-semibold py-1 rounded-md border border-[#eaf0e4]">
                {staff.shift}
              </span>
              <span className={`flex-1 text-xs font-semibold py-1 rounded-md border ${
                staff.status === 'On Duty' ? 'bg-[#e8f5e9] text-[#2e7d32] border-[#a5d6a7]' :
                staff.status === 'On Break' ? 'bg-[#fff8e1] text-[#f57f17] border-[#ffe082]' :
                'bg-[#f5f5f5] text-[#9e9e9e] border-[#e0e0e0]'
              }`}>
                {staff.status}
              </span>
            </div>

            <div className="flex justify-center gap-3 w-full border-t border-[#eaf0e4] pt-4">
              <button className="p-2 rounded-full bg-[#f0f6ea] text-[#006e1c] hover:bg-[#e8f5e9] transition">
                <Phone className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-[#f0f6ea] text-[#006e1c] hover:bg-[#e8f5e9] transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </AdminLayout>
);

export default Staff;
