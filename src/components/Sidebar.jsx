import React from 'react'

function Sidebar() {
  return <>
  <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


<a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
</a>


<hr className="sidebar-divider my-0"/>


<li className="nav-item active">
    <a className="nav-link" href="javascript(void)">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
</li>

<hr className="sidebar-divider"/>


<div className="sidebar-heading">
    Interface
</div>


<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
        <i className="fas fa-fw fa-cog"></i>
        <span>ADD USER</span>
    </a>
</li>

<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        <i className="fas fa-fw fa-wrench"></i>
        <span>VIEW USER</span>
    </a>
</li>

</ul>
  </>
}
export default Sidebar